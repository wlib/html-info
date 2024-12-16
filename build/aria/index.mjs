import { JSDOM } from "jsdom"
import { writeFile } from "node:fs/promises"

import { makeInterface, makeCommentedEntry, makeUnion, indent } from "../utils/typescript.mjs"
import { nodeToMarkdown } from "../utils/markdown.mjs"

const ariaSpec = await JSDOM.fromURL("https://w3c.github.io/aria/")
// TODO scrape from these specs for more accurate allowed values
// https://w3c.github.io/html-aria/#docconformance
// https://w3c.github.io/svg-aam/#mapping_role_table

// https://w3c.github.io/aria/#abstract_roles
/** @type { HTMLUListElement } */
const abstractRolesList = ariaSpec.window.document.querySelector("#abstract_roles ul")

// https://w3c.github.io/aria/#role_definitions
/** @type { HTMLDListElement } */
const rolesList = ariaSpec.window.document.querySelector("#index_role")

// https://w3c.github.io/aria/#state_prop_def
/** @type { HTMLDListElement } */
const ariaAttributesList = ariaSpec.window.document.querySelector("#index_state_prop")


const abstractRoles = new Set(
  [...abstractRolesList.querySelectorAll("li code")]
    .map(code => code.textContent.trim())
)

/** @type { import("./index").RolesData */
const rolesData = Object.fromEntries(
  [...rolesList.querySelectorAll("dt")]
    .map(dt => {
      const name = dt.textContent.trim()
      if (abstractRoles.has(name)) return

      const link = dt.querySelector("a")

      return [name, {
        description: nodeToMarkdown(dt.nextElementSibling),
        specLink: link.href
      }]
    })
    .filter(x => x)
)

await writeFile(
  new URL("../../built/data/aria/roles.json", import.meta.url),
  JSON.stringify(rolesData, null, 2)
)

// Extract aria attributes data
/** @type { import("./index").AriaAttributesData } */
const ariaAttributesData = Object.fromEntries(
  [...ariaAttributesList.querySelectorAll("dt")]
    .map(dt => {
      const name = dt.textContent.trim()
      const link = dt.querySelector("a")

      const detailIdRef = link.getAttribute("href")
      const detailSection = link.ownerDocument.querySelector(detailIdRef)
      const type = detailSection.querySelector("td:is(.property-value, .state-value)")

      return [name, {
        description: nodeToMarkdown(dt.nextElementSibling),
        type: nodeToMarkdown(type),
        specLink: link.href
      }]
    })
)

await writeFile(
  new URL("../../built/data/aria/attributes.json", import.meta.url),
  JSON.stringify(ariaAttributesData, null, 2)
)


const WithRole = `
type WithRole =
${makeUnion(
  Object.entries(rolesData).map(([role, roleInfo]) => {
  const comment = `
${roleInfo.description}

**Spec**: ${roleInfo.specLink}
  `.trim()

    return `{
${indent(makeCommentedEntry(comment, "role", JSON.stringify(role)))}
}`
  })
)}
`.trim()

const GlobalAriaAttributes = makeInterface("GlobalAriaAttributes", [
  `role: WithRole["role"]`,
  ...Object.entries(ariaAttributesData).map(([attribute, attributeInfo]) => {
    const comment = `
${attributeInfo.description}

**Type**: ${attributeInfo.type}

**Spec**: ${attributeInfo.specLink}
    `.trim()

    return makeCommentedEntry(comment, attribute, "string")
  })
])

await writeFile(
  new URL("../../built/types/aria/index.ts", import.meta.url),
  WithRole + "\n\n" + GlobalAriaAttributes
)
