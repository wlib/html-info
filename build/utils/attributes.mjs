const numberTypes = new Set([
  "https://w3c.github.io/aria/#valuetype_integer",
  "https://w3c.github.io/aria/#valuetype_number",
  "https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer",
  "https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer",
  "https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number"
])

export const getType = (attribute, typeDescriptionElement) => {
  const links = [...typeDescriptionElement.querySelectorAll("a")]

  if (links.some(link => numberTypes.has(link.href))) {
    return "number | string"
  }

  return "string"
}
