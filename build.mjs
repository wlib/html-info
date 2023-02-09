import { JSDOM } from "jsdom"
import { writeFile } from "fs/promises"

const htmlSpecIndices = await JSDOM.fromURL("https://html.spec.whatwg.org/multipage/indices.html")

/** @type { HTMLTableElement } */
const elementsTable               = htmlSpecIndices.window.document.querySelector("#elements-3 ~ table")
/** @type { HTMLTableElement } */
const attributesTable             = htmlSpecIndices.window.document.querySelector("table#attributes-1")
/** @type { HTMLTableElement } */
const eventHandlerAttributesTable = htmlSpecIndices.window.document.querySelector("table#ix-event-handlers")

const elementsTableData = Object.fromEntries(
  [...elementsTable.tBodies[0].rows]
    .flatMap(row => {
      const [
        element,
        description,
        constentCategories,
        parentContentCategories,
        childContentCategories,
        attributes,
        DOMInterface
      ] = row.cells

      const tag = element.querySelector("code")?.textContent
      if (!tag) {
        console.warn(`skipping elements table row "${element.textContent}"`)
        return []
      }

      const specLink = element.querySelector("a").href

      const descriptionText = description.textContent

      const specificAttributes = Object.fromEntries(
        [...attributes.querySelectorAll("code")]
          .map(code => {
            const attribute = code.textContent
            const specLink = code.querySelector("a").href

            const key = attribute
            const value = {
              specLink
            }

            return [key, value]
          })
      )

      const key = tag
      const value = {
        specLink,
        descriptionText,
        specificAttributes
      }

      return [
        [key, value]
      ]
    })
)

await writeFile(
  new URL("./data/elements-table.json", import.meta.url),
  JSON.stringify(elementsTableData, null, 2)
)

const attributesTableData =
  [...attributesTable.tBodies[0].rows]
    .flatMap(row => {
      const [
        _attribute,
        _elements,
        description,
        value
      ] = row.cells

      const attribute = _attribute.querySelector("code")?.textContent

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
          .flatMap(a => {
            if (a.parentElement.tagName !== "CODE") {
              if (a.textContent === "HTML elements")
                return [
                  {
                    type: "global",
                    specLink: a.href
                  }
                ]

              if (a.textContent === "form-associated custom elements")
                return [
                  {
                    type: "form-associated custom elements",
                    specLink: a.href
                  }
                ]

              console.log(`skipping attributes table "${attribute}" elements link "${a.textContent}"`)
              return []
            }

            if (parenthesizedElements.has(a.parentElement)) {
              console.log(`skipping attributes table "${attribute}" parenthesized elements link "${a.textContent}"`)
              return []
            }

            return [
              {
                type: "element",
                specLink: a.href,
                element: a.textContent
              }
            ]
          })

      return {
        attribute,
        elements,
        descriptionText: description.textContent.trim(),
        value: value.textContent.trim()
      }
    })


await writeFile(
  new URL("./data/attributes-table.json", import.meta.url),
  JSON.stringify(attributesTableData, null, 2)
)
