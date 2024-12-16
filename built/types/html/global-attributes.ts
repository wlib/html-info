export interface HTMLGlobalAttributes {
  /**
   * Keyboard shortcut to activate or focus element
   * 
   * **Type**: [Ordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#ordered-set-of-unique-space-separated-tokens), none of which are [identical to](https://infra.spec.whatwg.org/#string-is) another, each consisting of one code point in length
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute
   */
  "accesskey": string,
  /**
   * Recommended autocapitalization behavior (for supported input methods)
   * 
   * **Type**: "[`on`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-on)"; "[`off`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-off)"; "[`none`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-none)"; "[`sentences`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-sentences)"; "[`words`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-words)"; "[`characters`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize-characters)"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize
   */
  "autocapitalize": string,
  /**
   * Recommended autocorrection behavior (for supported input methods)
   * 
   * **Type**: "[`on`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocorrect-on)"; "[`off`](https://html.spec.whatwg.org/multipage/interaction.html#attr-autocorrect-off)"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-autocorrect
   */
  "autocorrect": string,
  /**
   * Automatically focus the element when the page is loaded
   * 
   * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-fe-autofocus
   */
  "autofocus": string,
  /**
   * Classes to which the element belongs
   * 
   * **Type**: [Set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#classes
   */
  "class": string,
  /**
   * Whether the element is editable
   * 
   * **Type**: "`true`"; "`plaintext-only`"; "`false`"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable
   */
  "contenteditable": string,
  /**
   * [The text directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of the element
   * 
   * **Type**: "[`ltr`](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-ltr)"; "[`rtl`](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-rtl)"; "[`auto`](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-auto)"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#attr-dir
   */
  "dir": string,
  /**
   * Whether the element is draggable
   * 
   * **Type**: "`true`"; "`false`"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dnd.html#attr-draggable
   */
  "draggable": string,
  /**
   * Hint for selecting an enter key action
   * 
   * **Type**: "[`enter`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-enter)"; "[`done`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-done)"; "[`go`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-go)"; "[`next`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-next)"; "[`previous`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-previous)"; "[`search`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-search)"; "[`send`](https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint-keyword-send)"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint
   */
  "enterkeyhint": string,
  /**
   * Whether the element is relevant
   * 
   * **Type**: "[`until-found`](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden-until-found)"; "[`hidden`](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden)"; the empty string
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden
   */
  "hidden": string,
  /**
   * The element's [ID](https://dom.spec.whatwg.org/#concept-id)
   * 
   * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute
   */
  "id": string,
  /**
   * Whether the element is [inert](https://html.spec.whatwg.org/multipage/interaction.html#inert).
   * 
   * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute
   */
  "inert": string,
  /**
   * Hint for selecting an input modality
   * 
   * **Type**: "[`none`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-none)"; "[`text`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-text)"; "[`tel`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-tel)"; "[`email`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-email)"; "[`url`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-url)"; "[`numeric`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-numeric)"; "[`decimal`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-decimal)"; "[`search`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-search)"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode
   */
  "inputmode": string,
  /**
   * Creates a [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element)
   * 
   * **Type**: [Valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) of a defined [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  "is": string,
  /**
   * [Global identifier](https://html.spec.whatwg.org/multipage/microdata.html#global-identifier) for a microdata item
   * 
   * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid
   */
  "itemid": string,
  /**
   * [Property names](https://html.spec.whatwg.org/multipage/microdata.html#property-names) of a microdata item
   * 
   * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of [valid absolute URLs](https://url.spec.whatwg.org/#syntax-url-absolute), [defined property names](https://html.spec.whatwg.org/multipage/microdata.html#defined-property-name), or text*
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute
   */
  "itemprop": string,
  /**
   * [Referenced](https://html.spec.whatwg.org/multipage/dom.html#referenced) elements
   * 
   * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of IDs*
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref
   */
  "itemref": string,
  /**
   * Introduces a microdata item
   * 
   * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope
   */
  "itemscope": string,
  /**
   * [Item types](https://html.spec.whatwg.org/multipage/microdata.html#item-types) of a microdata item
   * 
   * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of [valid absolute URLs](https://url.spec.whatwg.org/#syntax-url-absolute)*
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype
   */
  "itemtype": string,
  /**
   * [Language](https://html.spec.whatwg.org/multipage/dom.html#language) of the element
   * 
   * **Type**: Valid BCP 47 language tag or the empty string
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#attr-lang
   */
  "lang": string,
  /**
   * Cryptographic nonce used in Content Security Policy checks [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)
   * 
   * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce
   */
  "nonce": string,
  /**
   * Makes the element a [popover](https://html.spec.whatwg.org/multipage/popover.html#attr-popover) element
   * 
   * **Type**: "[`auto`](https://html.spec.whatwg.org/multipage/popover.html#attr-popover-auto)"; "[`manual`](https://html.spec.whatwg.org/multipage/popover.html#attr-popover-manual)";
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/popover.html#attr-popover
   */
  "popover": string,
  /**
   * The element's desired slot
   * 
   * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute
   */
  "slot": string,
  /**
   * Whether the element is to have its spelling and grammar checked
   * 
   * **Type**: "[`true`](https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck-true)"; "[`false`](https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck-false)"; the empty string
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck
   */
  "spellcheck": string,
  /**
   * Presentational and formatting instructions
   * 
   * **Type**: CSS declarations*
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#attr-style
   */
  "style": string,
  /**
   * Whether the element is [focusable](https://html.spec.whatwg.org/multipage/interaction.html#focusable) and [sequentially focusable](https://html.spec.whatwg.org/multipage/interaction.html#sequentially-focusable), and the relative order of the element for the purposes of [sequential focus navigation](https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation)
   * 
   * **Type**: [Valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex
   */
  "tabindex": string,
  /**
   * Advisory information for the element
   * 
   * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#attr-title
   */
  "title": string,
  /**
   * Whether the element is to be translated when the page is localized
   * 
   * **Type**: "`yes`"; "`no`"
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/dom.html#attr-translate
   */
  "translate": string,
  /**
   * Whether the element can offer writing suggestions or not.
   * 
   * **Type**: "[`true`](https://html.spec.whatwg.org/multipage/interaction.html#attr-writingsuggestions-true)"; "[`false`](https://html.spec.whatwg.org/multipage/interaction.html#attr-writingsuggestions-false)"; the empty string
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interaction.html#attr-writingsuggestions
   */
  "writingsuggestions": string
}