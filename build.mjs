import { JSDOM } from "jsdom"
import { writeFile } from "fs/promises"

const htmlSpecIndices = await JSDOM.fromURL("https://html.spec.whatwg.org/multipage/indices.html")

/** @type { HTMLTableElement } */
const elementsTable               = htmlSpecIndices.window.document.querySelector("#elements-3 ~ table")
/** @type { HTMLTableElement } */
const attributesTable             = htmlSpecIndices.window.document.querySelector("table#attributes-1")
/** @type { HTMLTableElement } */
const eventHandlerAttributesTable = htmlSpecIndices.window.document.querySelector("table#ix-event-handlers")

const elementsTableData = [...elementsTable.tBodies[0].rows]
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

    const tag = element.querySelector('code')?.textContent
    if (!tag) {
      console.warn(`skipping elements table row "${element.textContent}"`)
      return []
    }

    const specLink = element.querySelector('a').href

    const descriptionText = description.textContent

    const specificAttributes = [...attributes.querySelectorAll('code')]
      .map(code => {
        const attribute = code.textContent
        const specLink = code.querySelector('a').href

        return { attribute, specLink }
      })

    return [{
      tag,
      specLink,
      descriptionText,
      specificAttributes
    }]
  })

await writeFile(
  new URL('./data/elements-table.json', import.meta.url),
  JSON.stringify(elementsTableData, null, 2)
)
