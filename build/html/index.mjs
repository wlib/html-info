import { JSDOM } from "jsdom"
import { writeFile } from "node:fs/promises"

import { makeInterface, makeCommentedEntry, makeCommaSeparatedBlock } from "../utils/typescript.mjs"
import { nodeToMarkdown } from "../utils/markdown.mjs"
import { getType } from "../utils/attributes.mjs"

const htmlSpecIndices = await JSDOM.fromURL("https://html.spec.whatwg.org/multipage/indices.html")
// TODO
// https://svgwg.org/svg2-draft/
// https://w3c.github.io/mathml-core/

/** @type { HTMLTableElement } */
const elementsTable               = htmlSpecIndices.window.document.querySelector("#elements-3 ~ table")
/** @type { HTMLTableElement } */
const attributesTable             = htmlSpecIndices.window.document.querySelector("table#attributes-1")
/** @type { HTMLTableElement } */
const eventHandlerAttributesTable = htmlSpecIndices.window.document.querySelector("table#ix-event-handlers")


/** @type { import("./index").ElementsTableData } */
const elementsTableData = Object.fromEntries(
  [...elementsTable.tBodies[0].rows]
    .flatMap(row => {
      const [
        element,
        description,
        contentCategories,
        parentContentCategories,
        childContentCategories,
        attributes,
        DOMInterface
      ] = row.cells

      const tags = [...element.querySelectorAll("code")]
        .map(code => code.textContent.trim())

      if (!tags.length) {
        console.warn(`skipping elements table row "${element.textContent.trim()}"`)
        return []
      }

      const specLink = element.querySelector("a").href

      const specificAttributes = Object.fromEntries(
        [...attributes.querySelectorAll("code")]
          .map(code => {
            const attribute = code.textContent.trim()
            const specLink = code.querySelector("a").href

            const key = attribute
            const value = {
              specLink
            }

            return [key, value]
          })
      )

      return tags
        .filter(tag => {
          if (tag === 'svg' || tag === 'math') {
            console.warn(`skipping elements table tag <${tag}>`)
            return false
          }

          return true
        })
        .map(tag => {
          const key = tag
          const value = {
            specLink,
            description: nodeToMarkdown(description),
            specificAttributes
          }

          return [key, value]
        })
    })
)

await writeFile(
  new URL("../../built/data/html/elements-table.json", import.meta.url),
  JSON.stringify(elementsTableData, null, 2)
)


/** @type { import("./index").AttributesTableData } */
const attributesTableData =
  [...attributesTable.tBodies[0].rows]
    .reduce((attributesTableData, row) => {
      const [
        _attribute,
        _elements,
        description,
        typeDescription
      ] = row.cells

      const attribute = _attribute.querySelector("code")?.textContent?.trim()
      if (!attribute) {
        console.warn(`skipping attributes table row "${_attribute.textContent.trim()}"`)
        return attributesTableData
      }

      const parenthesizedElements =
        [..._elements.childNodes]
          .reduce(({ depth, elements }, node) => {
            if (node instanceof htmlSpecIndices.window.Text) {
              if (node.textContent.includes("("))
                depth++
              else if (node.textContent.includes(")"))
                depth--
            }
            else if (
              depth > 0 &&
              node instanceof htmlSpecIndices.window.HTMLElement &&
              node.tagName === "CODE"
            ) {
              elements.add(node)
            }

            return { depth, elements }
          }, {
            depth: 0,
            elements: new Set()
          })
          .elements

      const elements =
        [..._elements.querySelectorAll("a")]
          .reduce((elements, a) => {
            if (a.parentElement.tagName !== "CODE") {
              if (a.textContent.trim() === "HTML elements") {
                elements.global = {
                  specLink: a.href
                }
                return elements
              }

              if (a.textContent.trim() === "form-associated custom elements") {
                elements["form-associated custom elements"] = {
                  specLink: a.href
                }
                return elements
              }

              console.log(`skipping attributes table "${attribute}" elements link "${a.textContent.trim()}"`)
              return elements
            }

            if (parenthesizedElements.has(a.parentElement)) {
              console.log(`skipping attributes table "${attribute}" parenthesized elements link "${a.textContent.trim()}"`)
              return elements
            }

            elements.byName ??= {}
            elements.byName[a.textContent.trim()] = {
              specLink: a.href
            }
            return elements
          }, {})

      attributesTableData[attribute] ??= []
      attributesTableData[attribute].push({
        description: nodeToMarkdown(description),
        typeDescription: nodeToMarkdown(typeDescription),
        type: getType(attribute, typeDescription),
        elements
      })

      return attributesTableData
    }, {})

await writeFile(
  new URL("../../built/data/html/attributes-table.json", import.meta.url),
  JSON.stringify(attributesTableData, null, 2)
)


/** @type { import("./index").MergedData } */
const mergedData = {
  globalAttributes: {},
  tagToAttributes: {}
}

Object.entries(elementsTableData).forEach(([element, elementInfo]) => {
  mergedData.tagToAttributes[element] = {
    specLink: elementInfo.specLink,
    description: elementInfo.description,
    specificAttributes: {}
  }
  Object.entries(elementInfo.specificAttributes).forEach(([attribute, attributeInfo]) => {
    mergedData.tagToAttributes[element].specificAttributes[attribute] = {
      specLinks: [attributeInfo.specLink]
    }
  })
})
Object.entries(attributesTableData).forEach(([attribute, attributeInstances]) => {
  attributeInstances.forEach(attributeInstance => {
    if (attributeInstance.elements.global) {
      mergedData.globalAttributes[attribute] = {
        description: attributeInstance.description,
        typeDescription: attributeInstance.typeDescription,
        type: attributeInstance.type,
        specLink: attributeInstance.elements.global.specLink
      }
    }

    Object.entries(attributeInstance.elements.byName ?? {})
      .forEach(([element, elementAttributeInstance]) => {
        const attributeInfo = mergedData.tagToAttributes[element].specificAttributes[attribute] ??= {}
        attributeInfo.specLinks ??= []
        if (!attributeInfo.specLinks.includes(elementAttributeInstance.specLink))
          attributeInfo.specLinks.push(elementAttributeInstance.specLink)

        attributeInfo.description = attributeInstance.description
        attributeInfo.typeDescription = attributeInstance.typeDescription
        attributeInfo.type = attributeInstance.type
      })
  })
})

await writeFile(
  new URL("../../built/data/html/index.json", import.meta.url),
  JSON.stringify(mergedData, null, 2)
)


const HTMLGlobalAttributes = makeInterface("HTMLGlobalAttributes",
  Object.entries(mergedData.globalAttributes).map(([attribute, attributeInfo]) => {
    const comment = `
${attributeInfo.description}

**Type**: ${attributeInfo.typeDescription}

**Spec**: ${attributeInfo.specLink}
    `.trim()

    return makeCommentedEntry(comment, attribute, attributeInfo.type)
  })
)

await writeFile(
  new URL("../../built/types/html/global-attributes.ts", import.meta.url),
  HTMLGlobalAttributes
)


const HTMLTagToAttributes = makeInterface("HTMLTagToAttributes",
  Object.entries(mergedData.tagToAttributes).map(([element, elementInfo]) => {
    const comment = `
${elementInfo.description}

**Spec**: ${elementInfo.specLink}
    `.trim()

    const attributeEntries = Object.entries(elementInfo.specificAttributes)
      .map(([attribute, attributeInfo]) => {
        const comment = `
${attributeInfo.description ?? ""}

**Type**: ${attributeInfo.typeDescription}

**Specs**:
${
attributeInfo.specLinks
  .map(specLink => "- " + specLink)
  .join("\n")
}
        `.trim()

        return makeCommentedEntry(comment, attribute, attributeInfo.type ?? "string")
      })

    return makeCommentedEntry(comment, element, makeCommaSeparatedBlock(attributeEntries))
  })
)

await writeFile(
  new URL("../../built/types/html/tag-to-attributes.ts", import.meta.url),
  HTMLTagToAttributes
)
