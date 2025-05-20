import type { HTMLGlobalAttributes as BuiltHTMLGlobalAttributes } from "./built/types/html/global-attributes"
import type { HTMLTagToAttributes  as BuiltHTMLTagToAttributes  } from "./built/types/html/tag-to-attributes"

import type { GlobalAriaAttributes as BuiltGlobalAriaAttributes } from "./built/types/aria/index"

// TODO
interface BuiltSVGGlobalAttributes {}
interface BuiltSVGTagToAttributes {}
interface BuiltMathMLGlobalAttributes {}
interface BuiltMathMLTagToAttributes {}

type BuiltHTMLTag   = keyof BuiltHTMLTagToAttributes
type BuiltSVGTag    = keyof BuiltSVGTagToAttributes
type BuiltMathMLTag = keyof BuiltMathMLTagToAttributes

// Merge built elements into standard typescript `ElementTagNameMap` elements
type   HTMLElementTagNameMap_ = { [Name in BuiltHTMLTag]:     HTMLElement }
type    SVGElementTagNameMap_ = { [Name in BuiltSVGTag]:       SVGElement }
type MathMLElementTagNameMap_ = { [Name in BuiltMathMLTag]: MathMLElement }
declare global {
  interface   HTMLElementTagNameMap extends   HTMLElementTagNameMap_ {}
  interface    SVGElementTagNameMap extends    SVGElementTagNameMap_ {}
  interface MathMLElementTagNameMap extends MathMLElementTagNameMap_ {}
}

export type   HTMLTag = keyof   HTMLElementTagNameMap
export type    SVGTag = keyof    SVGElementTagNameMap
export type MathMLTag = keyof MathMLElementTagNameMap

/** @see https://infra.spec.whatwg.org/#namespaces */
export type Namespace
  = HTMLNamespace
  | SVGNamespace
  | MathMLNamespace
  | "http://www.w3.org/1999/xlink"
  | "http://www.w3.org/XML/1998/namespace"
  | "http://www.w3.org/2000/xmlns/"
  | (string & {})

/** @see https://infra.spec.whatwg.org/#html-namespace */
export type   HTMLNamespace = "http://www.w3.org/1999/xhtml"
/** @see https://infra.spec.whatwg.org/#svg-namespace */
export type    SVGNamespace = "http://www.w3.org/2000/svg"
/** @see https://infra.spec.whatwg.org/#mathml-namespace */
export type MathMLNamespace = "http://www.w3.org/1998/Math/MathML"

/**
 * Types combining `document.createElement()` / `document.createElementNS()`.
 *
 * Extensible via the standard TS `HTMLElementTagNameMap` / `SVGElementTagNameMap` / `MathMLElementTagNameMap`.
 *
 * ```tsx
 * class HTMLMyCustomElement extends HTMLElement {
 *   constructor() {
 *     super()
 *   }
 * }
 *
 * customElements.define("my-custom", HTMLMyCustomElement)
 *
 * declare global {
 *   interface HTMLElementTagNameMap {
 *     "my-custom": HTMLMyCustomElement
 *   }
 * }
 * ```
 */
export type ElementType<
  Name extends string,
  NS   extends Namespace = HTMLNamespace
>
  = NS extends HTMLNamespace
    ?
      Name extends HTMLTag
        ? HTMLElementTagNameMap[Name]
        : HTMLElement
  : NS extends SVGNamespace
    ?
      Name extends SVGTag
        ? SVGElementTagNameMap[Name]
        : SVGElement
  : NS extends MathMLNamespace
    ?
      Name extends MathMLTag
        ? MathMLElementTagNameMap[Name]
        : MathMLElement
  : Element

// Mapping `Element`'s to standard TS `ElementEventMap`'s
type ElementToEventMap_<E extends Element>
  = E extends HTMLElement
    ?
      E extends HTMLBodyElement
        ? HTMLBodyElementEventMap
        : E extends HTMLMediaElement
          ?
            E extends HTMLVideoElement
              ? HTMLVideoElementEventMap
              : HTMLMediaElementEventMap
          : HTMLElementEventMap
  : E extends SVGElement
    ?
      E extends SVGSVGElement
        ? SVGSVGElementEventMap
        : SVGElementEventMap
  : E extends MathMLElement
    ? MathMLElementEventMap
  : ElementEventMap & GlobalEventHandlersEventMap

type   HTMLTagToEventMap_ = { [Name in   HTMLTag]: ElementToEventMap_<  HTMLElementTagNameMap[Name]> }
type    SVGTagToEventMap_ = { [Name in    SVGTag]: ElementToEventMap_<   SVGElementTagNameMap[Name]> }
type MathMLTagToEventMap_ = { [Name in MathMLTag]: ElementToEventMap_<MathMLElementTagNameMap[Name]> }

/**
 * Extensible interface mapping HTML tag names to their `HTMLElementEventMap`s.
 *
 * Note that this is useful for custom events on custom elements.
 * Custom events for all elements should be merged with `ElementEventMap`.
 *
 * ```tsx
 * interface HTMLMyCustomElementEventMap extends HTMLElementEventMap {
 *   bruhmoment: CustomEvent<{ bruh: string }>
 * }
 *
 * declare module "html-info" {
 *   interface HTMLTagToEventMap {
 *     "my-custom": HTMLMyCustomElementEventMap
 *   }
 * }
 * ```
 */
export interface   HTMLTagToEventMap extends   HTMLTagToEventMap_ {}
export interface    SVGTagToEventMap extends    SVGTagToEventMap_ {}
export interface MathMLTagToEventMap extends MathMLTagToEventMap_ {}

export type ElementToEventMap<
  Name extends string,
  NS   extends Namespace = HTMLNamespace
>
  = NS extends HTMLNamespace
    ?
      Name extends HTMLTag
        ? HTMLTagToEventMap[Name]
        : HTMLElementEventMap
  : NS extends SVGNamespace
    ?
      Name extends SVGTag
        ? SVGTagToEventMap[Name]
        : SVGElementEventMap
  : NS extends MathMLNamespace
    ?
      Name extends MathMLTag
        ? MathMLTagToEventMap[Name]
        : MathMLElementEventMap
  : ElementEventMap & GlobalEventHandlersEventMap


export type ElementToAttributes<
  Name extends string,
  NS   extends Namespace = HTMLNamespace
>
  = NS extends HTMLNamespace
    ?
      Name extends (keyof HTMLTagToAttributes)
        ? HTMLGlobalAttributes & HTMLTagToAttributes[Name]
        : HTMLGlobalAttributes
  : NS extends SVGNamespace
    ?
      Name extends (keyof SVGTagToAttributes)
        ? SVGGlobalAttributes & SVGTagToAttributes[Name]
        : SVGGlobalAttributes
  : NS extends MathMLNamespace
    ?
      Name extends (keyof MathMLTagToAttributes)
        ? MathMLGlobalAttributes & MathMLTagToAttributes[Name]
        : MathMLGlobalAttributes
  : GlobalAttributes

// https://dom.spec.whatwg.org/#:~:text=id%2C%20class%2C%20and%20slot%20are%20effectively%20superglobal,.
export interface GlobalAttributes extends Pick<BuiltHTMLGlobalAttributes, "id" | "class" | "slot" | "part" | "exportparts"> {}

export interface GlobalAriaAttributes extends BuiltGlobalAriaAttributes {}

// https://html.spec.whatwg.org/multipage/dom.html#global-attributes
export interface HTMLGlobalAttributes extends
  GlobalAttributes,
  GlobalAriaAttributes,
  Omit<BuiltHTMLGlobalAttributes, keyof GlobalAttributes>
{
  [dataAttribute: `data-${string}`]: string
}

export interface SVGGlobalAttributes extends
  GlobalAttributes,
  GlobalAriaAttributes,
  BuiltSVGGlobalAttributes,
  // https://svgwg.org/svg2-draft/single-page.html#struct-CommonAttributeDefinitions
  Pick<BuiltHTMLGlobalAttributes, "style" | "tabindex" | "autofocus" | "lang">
{
  [dataAttribute: `data-${string}`]: string
}

export interface MathMLGlobalAttributes extends
  GlobalAttributes,
  GlobalAriaAttributes,
  BuiltMathMLGlobalAttributes,
  // https://www.w3.org/TR/mathml-core/#attributes-common-to-html-and-mathml-elements
  Pick<BuiltHTMLGlobalAttributes, "style" | "nonce" | "tabindex" | "dir">
{
  [dataAttribute: `data-${string}`]: string
}

// Merge standard typescript `ElementTagNameMap` into exported attributes
type HTMLTagToAttributes_ = {
  [Name in keyof HTMLElementTagNameMap]:
    Name extends BuiltHTMLTag
      ? BuiltHTMLTagToAttributes[Name]
      : {}
}
type SVGTagToAttributes_ = {
  [Name in keyof SVGElementTagNameMap]:
    Name extends BuiltSVGTag
      ? BuiltSVGTagToAttributes[Name]
      : {}
}
type MathMLTagToAttributes_ = {
  [Name in keyof MathMLElementTagNameMap]:
    Name extends BuiltMathMLTag
      ? BuiltMathMLTagToAttributes[Name]
      : {}
}
export interface   HTMLTagToAttributes extends   HTMLTagToAttributes_ {}
export interface    SVGTagToAttributes extends    SVGTagToAttributes_ {}
export interface MathMLTagToAttributes extends MathMLTagToAttributes_ {}
