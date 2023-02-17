export const indent = (text, indentation = "  ") => {
  return text
    .split("\n")
    .map(line => indentation + line)
    .join("\n")
}

export const makeComment = text =>
`
/**
${indent(text, " * ")}
 */
`.trim()

export const makeCommaSeparatedBlock = entries =>
`
{
${indent(entries.join(",\n"))}
}
`.trim()

export const makeCommentedEntry = (comment, name, value) =>
`
${makeComment(comment)}
${JSON.stringify(name)}: ${value}
`.trim()

export const makeInterface = (name, entries) =>
  `export interface ${name} ${makeCommaSeparatedBlock(entries)}`
