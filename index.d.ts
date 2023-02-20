import type {
  HTMLTagToAttributes as BuiltHTMLTagToAttributes
} from "./built/types/tag-to-attributes"

// TODO
interface BuiltSVGTagToAttributes {}

type BuiltHTMLTag = keyof BuiltHTMLTagToAttributes
type BuiltSVGTag  = keyof BuiltSVGTagToAttributes

// Merge built elements into standard typescript `ElementTagNameMap` elements
type HTMLElementTagNameMap_ = { [Name in BuiltHTMLTag]: HTMLElement }
type  SVGElementTagNameMap_ = { [Name in BuiltSVGTag]:   SVGElement }
declare global {
  interface HTMLElementTagNameMap extends HTMLElementTagNameMap_ {}
  interface  SVGElementTagNameMap extends  SVGElementTagNameMap_ {}
}

export type HTMLTag = keyof HTMLElementTagNameMap
export type  SVGTag = keyof  SVGElementTagNameMap

/** @see https://infra.spec.whatwg.org/#namespaces */
export type Namespace
  = HTMLNamespace
  | SVGNamespace
  | "http://www.w3.org/1998/Math/MathML"
  | "http://www.w3.org/1999/xlink"
  | "http://www.w3.org/XML/1998/namespace"
  | "http://www.w3.org/2000/xmlns/"
  | (string & {})

/** @see https://infra.spec.whatwg.org/#html-namespace */
export type HTMLNamespace = "http://www.w3.org/1999/xhtml"
/** @see https://infra.spec.whatwg.org/#svg-namespace */
export type  SVGNamespace = "http://www.w3.org/2000/svg"

/**
 * Types combining `document.createElement()` / `document.createElementNS()`.
 *
 * Extensible via the standard TS `HTMLElementTagNameMap` / `SVGElementTagNameMap`.
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
  Name      extends string,
  NS extends Namespace = HTMLNamespace
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
    : ElementEventMap

type HTMLTagToEventMap_ = { [Name in HTMLTag]: ElementToEventMap_<HTMLElementTagNameMap[Name]> }
type  SVGTagToEventMap_ = { [Name in  SVGTag]: ElementToEventMap_< SVGElementTagNameMap[Name]> }

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
export interface HTMLTagToEventMap extends HTMLTagToEventMap_ {}
export interface  SVGTagToEventMap extends  SVGTagToEventMap_ {}


export type ElementToAttributes<
  Name      extends string,
  NS extends Namespace = HTMLNamespace
>
  = NS extends HTMLNamespace
    ?
      Name extends (keyof HTMLTagToAttributes)
        ? GlobalAttributes & HTMLTagToAttributes[Name]
        : GlobalAttributes
  : NS extends SVGNamespace
    ?
      Name extends (keyof SVGTagToAttributes)
        ? GlobalAttributes & SVGTagToAttributes[Name]
        : GlobalAttributes
  : GlobalAttributes

export interface GlobalAttributes {}

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
export interface HTMLTagToAttributes extends HTMLTagToAttributes_ {}
export interface  SVGTagToAttributes extends  SVGTagToAttributes_ {}
