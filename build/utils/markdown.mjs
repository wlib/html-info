function* nodesToMarkdownChunks(nodes, options) {
  for (const node of nodes) {
    if (node.nodeType === node.TEXT_NODE) {
      yield options?.isPreformatted
        ? node.textContent
        : node.textContent.replace(/\s+/g, " ")

      continue
    }

    if (node.nodeType !== node.ELEMENT_NODE) continue

    const tag = node.tagName.toLowerCase()

    if (tag === "a") {
      yield "["
      yield* nodesToMarkdownChunks(node.childNodes)
      yield `](${node.href})`
    }
    else if (tag === "strong" || tag === "b") {
      yield "**"
      yield* nodesToMarkdownChunks(node.childNodes)
      yield "**"
    }
    else if (tag === "em" || tag === "i") {
      yield "_"
      yield* nodesToMarkdownChunks(node.childNodes)
      yield "_"
    }
    else if (tag === "code") {
      // Special case for code containing single link
      if (node.childNodes.length === 1 && node.firstElementChild?.tagName.toLowerCase() === "a") {
        const a = node.firstChild
        yield "[`"
        yield* nodesToMarkdownChunks(a.childNodes, { ...options, isPreformatted: true })
        yield `\`](${a.href})`
      }
      else {
        yield "`"
        yield* nodesToMarkdownChunks(node.childNodes, { ...options, isPreformatted: true })
        yield "`"
      }
    }
    else if (tag === "ul") {
      yield "\n"
      for (const li of node.children) {
        yield "  ".repeat(options?.depth ?? 0)
        yield "- "
        yield* nodesToMarkdownChunks(li.childNodes, { ...options, depth: (options?.depth ?? 0) + 1 })
        yield "\n"
      }
    }
    else if (tag === "ol") {
      yield "\n"
      let n = 1
      for (const li of node.children) {
        yield "  ".repeat(options?.depth ?? 0)
        yield `${n++}. `
        yield* nodesToMarkdownChunks(li.childNodes, { ...options, depth: (options?.depth ?? 0) + 1 })
        yield "\n"
      }
    }
    else {
      yield* nodesToMarkdownChunks(node.childNodes)
    }
  }
}

export const nodeToMarkdown = node => {
  let result = ""

  const normalized = node.cloneNode(true)
  normalized.normalize()
  for (const chunk of nodesToMarkdownChunks([normalized]))
    result += chunk

  return result.trim()
}
