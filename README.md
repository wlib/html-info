# html-info

Reasonably-complete JSON data and TypeScript definitions for HTML<!--, SVG, MathML--> and ARIA attributes, continously scraped directly from the specs.

## Sources

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
<!--
- [SVG 2 Specification](https://svgwg.org/svg2-draft/)
- [MathML Core Specification](https://w3c.github.io/mathml-core/)
-->
- [WAI-ARIA Specification](https://w3c.github.io/aria/)

## Usage

```ts
import {
  ElementType,
  ElementToAttributes,
  SVGNamespace,
  HTMLTagToEventMap,
  HTMLTagToAttributes,
  SVGTagToAttributes
} from 'html-info'

type HTMLButtonElement_ = ElementType<'button'> // HTMLButtonElement

type DivAttributes = ElementToAttributes<'div'> // HTMLGlobalAttributes & specific div attributes

// SVG and MathML attributes not yet implemented
type PathAttributes = ElementToAttributes<'path', SVGNamespace> // SVGGlobalAttributes & specific path attributes

type DivAttributes2 = HTMLTagToAttributes['div'] // same as ElementToAttributes<'div'>

type PathAttributes2 = SVGTagToEventMap['path'] // same as ElementToAttributes<'path', SVGNamespace>

type VideoEvents = HTMLTagToEventMap['video'] // HTMLVideoElementEventMap
```

## Extending

```ts
class HTMLMyCustomElement extends HTMLElement {
  constructor() {
    super()
  }
}

customElements.define("my-custom", HTMLMyCustomElement)

declare global {
  interface HTMLElementTagNameMap {
    "my-custom": HTMLMyCustomElement
  }
}

// Events

interface HTMLMyCustomElementEventMap extends HTMLElementEventMap {
  bruhmoment: CustomEvent<{ bruh: string }>
}

declare module "html-info" {
  interface HTMLTagToEventMap {
    "my-custom": HTMLMyCustomElementEventMap
  }
}

// Attributes

declare module "html-info" {
  interface HTMLTagToAttributes {
    "my-custom": {
      "allow-bruh-moments": "" | "true" | "bet"
    }
  }
}
```
