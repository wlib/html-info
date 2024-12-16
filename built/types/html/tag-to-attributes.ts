export interface HTMLTagToAttributes {
  /**
   * Hyperlink
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
   */
  "a": {
    /**
     * Address of the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href
     */
    "href": string,
    /**
     * [Navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target
     */
    "target": string,
    /**
     * Whether to download the resource instead of navigating to it, and its filename if so
     * 
     * **Type**: Text
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download
     */
    "download": string,
    /**
     * [URLs](https://url.spec.whatwg.org/#concept-url) to ping
     * 
     * **Type**: [Set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) consisting of [valid non-empty URLs](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#ping
     */
    "ping": string,
    /**
     * Relationship between the location in the document containing the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) and the destination resource
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-rel
     */
    "rel": string,
    /**
     * Language of the linked resource
     * 
     * **Type**: Valid BCP 47 language tag
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang
     */
    "hreflang": string,
    /**
     * Hint for the type of the referenced resource
     * 
     * **Type**: [Valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-type
     */
    "type": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-referrerpolicy
     */
    "referrerpolicy": string
  },
  /**
   * Abbreviation
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element
   */
  "abbr": {
    /**
     * Full term or expansion of abbreviation
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-abbr-title
     */
    "title": string
  },
  /**
   * Contact information for a page or [`article`](https://html.spec.whatwg.org/multipage/sections.html#the-article-element) element
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-address-element
   */
  "address": {
    
  },
  /**
   * Hyperlink or dead area on an image map
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
   */
  "area": {
    /**
     * Replacement text for use when images are not available
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt
     */
    "alt": string,
    /**
     * Coordinates for the shape to be created in an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map)
     * 
     * **Type**: [Valid list of floating-point numbers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-list-of-floating-point-numbers)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords
     */
    "coords": string,
    /**
     * The kind of shape to be created in an [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map)
     * 
     * **Type**: "[`circle`](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-circle)"; "[`default`](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-default)"; "[`poly`](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-poly)"; "[`rect`](https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-rect)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape
     */
    "shape": string,
    /**
     * Address of the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href
     */
    "href": string,
    /**
     * [Navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target
     */
    "target": string,
    /**
     * Whether to download the resource instead of navigating to it, and its filename if so
     * 
     * **Type**: Text
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download
     */
    "download": string,
    /**
     * [URLs](https://url.spec.whatwg.org/#concept-url) to ping
     * 
     * **Type**: [Set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) consisting of [valid non-empty URLs](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#ping
     */
    "ping": string,
    /**
     * Relationship between the location in the document containing the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) and the destination resource
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-rel
     */
    "rel": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-referrerpolicy
     */
    "referrerpolicy": string
  },
  /**
   * Self-contained syndicatable or reusable composition
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-article-element
   */
  "article": {
    
  },
  /**
   * Sidebar for tangentially related content
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-aside-element
   */
  "aside": {
    
  },
  /**
   * Audio player
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/media.html#the-audio-element
   */
  "audio": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-src
     */
    "src": string,
    /**
     * How the element handles crossorigin requests
     * 
     * **Type**: "[`anonymous`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword)"; "[`use-credentials`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-use-credentials-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin
     */
    "crossorigin": string,
    /**
     * Hints how much buffering the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) will likely need
     * 
     * **Type**: "[`none`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-none)"; "[`metadata`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-metadata)"; "[`auto`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-auto)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-preload
     */
    "preload": string,
    /**
     * Hint that the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) can be started automatically when the page is loaded
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay
     */
    "autoplay": string,
    /**
     * Whether to loop the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-loop
     */
    "loop": string,
    /**
     * Whether to mute the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) by default
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-muted
     */
    "muted": string,
    /**
     * Show user agent controls
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-controls
     */
    "controls": string
  },
  /**
   * Keywords
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element
   */
  "b": {
    
  },
  /**
   * Base URL and default target [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target) and [forms](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-target)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-base-element
   */
  "base": {
    /**
     * [Document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url)
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href
     */
    "href": string,
    /**
     * Default [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) and [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target
     */
    "target": string
  },
  /**
   * Text directionality isolation
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element
   */
  "bdi": {
    
  },
  /**
   * Text directionality formatting
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element
   */
  "bdo": {
    /**
     * [The text directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of the element
     * 
     * **Type**: "[`ltr`](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-ltr)"; "[`rtl`](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-rtl)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element
     */
    "dir": string
  },
  /**
   * A section quoted from another source
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element
   */
  "blockquote": {
    /**
     * Link to the source of the quotation or more information about the edit
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/grouping-content.html#attr-blockquote-cite
     */
    "cite": string
  },
  /**
   * Document body
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-body-element
   */
  "body": {
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onafterprint
     */
    "onafterprint": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeprint
     */
    "onbeforeprint": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeunload
     */
    "onbeforeunload": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onhashchange
     */
    "onhashchange": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onlanguagechange
     */
    "onlanguagechange": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onmessage
     */
    "onmessage": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onmessageerror
     */
    "onmessageerror": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onoffline
     */
    "onoffline": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-ononline
     */
    "ononline": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpageswap
     */
    "onpageswap": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpagehide
     */
    "onpagehide": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpagereveal
     */
    "onpagereveal": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpageshow
     */
    "onpageshow": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpopstate
     */
    "onpopstate": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onrejectionhandled
     */
    "onrejectionhandled": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onstorage
     */
    "onstorage": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onunhandledrejection
     */
    "onunhandledrejection": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onunload
     */
    "onunload": string
  },
  /**
   * Line break, e.g. in poem or postal address
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element
   */
  "br": {
    
  },
  /**
   * Button control
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
   */
  "button": {
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
     */
    "disabled": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * [URL](https://url.spec.whatwg.org/#concept-url) to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formaction
     */
    "formaction": string,
    /**
     * [Entry list](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#entry-list) encoding type to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "[`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-urlencoded)"; "[`multipart/form-data`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-formdata)"; "[`text/plain`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-text)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formenctype
     */
    "formenctype": string,
    /**
     * Variant to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "`GET`"; "`POST`"; "`dialog`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formmethod
     */
    "formmethod": string,
    /**
     * Bypass form control validation for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formnovalidate
     */
    "formnovalidate": string,
    /**
     * [Navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formtarget
     */
    "formtarget": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string,
    /**
     * Targets a popover element to toggle, show, or hide
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/popover.html#attr-popovertarget
     */
    "popovertarget": string,
    /**
     * Indicates whether a targeted popover element is to be toggled, shown, or hidden
     * 
     * **Type**: "[`toggle`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-toggle)"; "[`show`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-show)"; "[`hide`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-hide)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction
     */
    "popovertargetaction": string,
    /**
     * Type of button
     * 
     * **Type**: "[`submit`](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type-submit)"; "[`reset`](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type-reset)"; "[`button`](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type-button)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type
     */
    "type": string,
    /**
     * Value to be used for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-value
     */
    "value": string
  },
  /**
   * Scriptable bitmap canvas
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element
   */
  "canvas": {
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-height
     */
    "height": string
  },
  /**
   * Table caption
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-caption-element
   */
  "caption": {
    
  },
  /**
   * Title of a work
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element
   */
  "cite": {
    
  },
  /**
   * Computer code
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element
   */
  "code": {
    
  },
  /**
   * Table column
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-col-element
   */
  "col": {
    /**
     * Number of columns spanned by the element
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-col-span
     */
    "span": string
  },
  /**
   * Group of columns in a table
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element
   */
  "colgroup": {
    /**
     * Number of columns spanned by the element
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-colgroup-span
     */
    "span": string
  },
  /**
   * Machine-readable equivalent
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element
   */
  "data": {
    /**
     * Machine-readable value
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-data-value
     */
    "value": string
  },
  /**
   * Container for options for [combo box control](https://html.spec.whatwg.org/multipage/input.html#attr-input-list)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element
   */
  "datalist": {
    
  },
  /**
   * Content for corresponding [`dt`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element) element(s)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element
   */
  "dd": {
    
  },
  /**
   * A removal from the document
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/edits.html#the-del-element
   */
  "del": {
    /**
     * Link to the source of the quotation or more information about the edit
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/edits.html#attr-mod-cite
     */
    "cite": string,
    /**
     * Date and (optionally) time of the change
     * 
     * **Type**: [Valid date string with optional time](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string-with-optional-time)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/edits.html#attr-mod-datetime
     */
    "datetime": string
  },
  /**
   * Disclosure control for hiding details
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
   */
  "details": {
    /**
     * Name of group of mutually-exclusive [`details`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) elements
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-details-name
     */
    "name": string,
    /**
     * Whether the details are visible
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-details-open
     */
    "open": string
  },
  /**
   * Defining instance
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element
   */
  "dfn": {
    /**
     * Full term or expansion of abbreviation
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-dfn-title
     */
    "title": string
  },
  /**
   * Dialog box or window
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element
   */
  "dialog": {
    /**
     * Whether the dialog box is showing
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-open
     */
    "open": string
  },
  /**
   * Generic flow container, or container for name-value groups in [`dl`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) elements
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element
   */
  "div": {
    
  },
  /**
   * Association list consisting of zero or more name-value groups
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
   */
  "dl": {
    
  },
  /**
   * Legend for corresponding [`dd`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element) element(s)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element
   */
  "dt": {
    
  },
  /**
   * Stress emphasis
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element
   */
  "em": {
    
  },
  /**
   * [Plugin](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element
   */
  "embed": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-src
     */
    "src": string,
    /**
     * Type of embedded resource
     * 
     * **Type**: [Valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-type
     */
    "type": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string
  },
  /**
   * Group of form controls
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
   */
  "fieldset": {
    /**
     * Whether the descendant form controls, except any inside [`legend`](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element), are disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-fieldset-disabled
     */
    "disabled": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string
  },
  /**
   * Caption for [`figure`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element
   */
  "figcaption": {
    
  },
  /**
   * Figure with optional caption
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element
   */
  "figure": {
    
  },
  /**
   * Footer for a page or section
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-footer-element
   */
  "footer": {
    
  },
  /**
   * User-submittable form
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/forms.html#the-form-element
   */
  "form": {
    /**
     * Character encodings to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for "`UTF-8`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/forms.html#attr-form-accept-charset
     */
    "accept-charset": string,
    /**
     * [URL](https://url.spec.whatwg.org/#concept-url) to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-action
     */
    "action": string,
    /**
     * Default setting for autofill feature for controls in the form
     * 
     * **Type**: "`on`"; "`off`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/forms.html#attr-form-autocomplete
     */
    "autocomplete": string,
    /**
     * [Entry list](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#entry-list) encoding type to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "[`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-urlencoded)"; "[`multipart/form-data`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-formdata)"; "[`text/plain`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-text)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype
     */
    "enctype": string,
    /**
     * Variant to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "[`GET`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method-get-keyword)"; "[`POST`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method-post-keyword)"; "[`dialog`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method-dialog-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method
     */
    "method": string,
    /**
     * Name of form to use in the [`document.forms`](https://html.spec.whatwg.org/multipage/dom.html#dom-document-forms) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/forms.html#attr-form-name
     */
    "name": string,
    /**
     * Bypass form control validation for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-novalidate
     */
    "novalidate": string,
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/forms.html#attr-form-rel
     */
    "rel": string,
    /**
     * [Navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-target
     */
    "target": string
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h1": {
    
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h2": {
    
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h3": {
    
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h4": {
    
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h5": {
    
  },
  /**
   * Heading
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
   */
  "h6": {
    
  },
  /**
   * Container for document metadata
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
   */
  "head": {
    
  },
  /**
   * Introductory or navigational aids for a page or section
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-header-element
   */
  "header": {
    
  },
  /**
   * Heading container
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element
   */
  "hgroup": {
    
  },
  /**
   * Thematic break
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element
   */
  "hr": {
    
  },
  /**
   * Root element
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
   */
  "html": {
    /**
     * undefined
     * 
     * **Type**: undefined
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/obsolete.html#attr-html-manifest
     */
    "manifest": string
  },
  /**
   * Alternate voice
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element
   */
  "i": {
    
  },
  /**
   * [Child navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#child-navigable)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
   */
  "iframe": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-src
     */
    "src": string,
    /**
     * A document to render in the [`iframe`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)
     * 
     * **Type**: The source of [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc
     */
    "srcdoc": string,
    /**
     * Name of [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-name
     */
    "name": string,
    /**
     * Security rules for nested content
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens), [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive), consisting of 
     * - "[`allow-downloads`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-downloads)"
     * - "[`allow-forms`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-forms)"
     * - "[`allow-modals`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-modals)"
     * - "[`allow-orientation-lock`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-orientation-lock)"
     * - "[`allow-pointer-lock`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-pointer-lock)"
     * - "[`allow-popups`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-popups)"
     * - "[`allow-popups-to-escape-sandbox`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-popups-to-escape-sandbox)"
     * - "[`allow-presentation`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-presentation)"
     * - "[`allow-same-origin`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-same-origin)"
     * - "[`allow-scripts`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-scripts)"
     * - "[`allow-top-navigation`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation)"
     * - "[`allow-top-navigation-by-user-activation`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation-by-user-activation)"
     * - "[`allow-top-navigation-to-custom-protocols`](https://html.spec.whatwg.org/multipage/browsers.html#attr-iframe-sandbox-allow-top-navigation-to-custom-protocols)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox
     */
    "sandbox": string,
    /**
     * [Permissions policy](https://w3c.github.io/webappsec-feature-policy/#permissions-policy) to be applied to the [`iframe`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)'s contents
     * 
     * **Type**: [Serialized permissions policy](https://w3c.github.io/webappsec-feature-policy/#serialized-permissions-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allow
     */
    "allow": string,
    /**
     * Whether to allow the [`iframe`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)'s contents to use [`requestFullscreen()`](https://fullscreen.spec.whatwg.org/#dom-element-requestfullscreen)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allowfullscreen
     */
    "allowfullscreen": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-referrerpolicy
     */
    "referrerpolicy": string,
    /**
     * Used when determining loading deferral
     * 
     * **Type**: "[`lazy`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-lazy)"; "[`eager`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-eager)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-loading
     */
    "loading": string
  },
  /**
   * Image
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
   */
  "img": {
    /**
     * Replacement text for use when images are not available
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-alt
     */
    "alt": string,
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-src
     */
    "src": string,
    /**
     * Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
     * 
     * **Type**: Comma-separated list of [image candidate strings](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset
     */
    "srcset": string,
    /**
     * Image sizes for different page layouts
     * 
     * **Type**: [Valid source size list](https://html.spec.whatwg.org/multipage/images.html#valid-source-size-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-sizes
     */
    "sizes": string,
    /**
     * How the element handles crossorigin requests
     * 
     * **Type**: "[`anonymous`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword)"; "[`use-credentials`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-use-credentials-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin
     */
    "crossorigin": string,
    /**
     * Name of [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map) to use
     * 
     * **Type**: [Valid hash-name reference](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-hash-name-reference)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/image-maps.html#attr-hyperlink-usemap
     */
    "usemap": string,
    /**
     * Whether the image is a server-side image map
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-ismap
     */
    "ismap": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-referrerpolicy
     */
    "referrerpolicy": string,
    /**
     * Decoding hint to use when processing this image for presentation
     * 
     * **Type**: "[`sync`](https://html.spec.whatwg.org/multipage/images.html#attr-img-decoding-sync)"; "[`async`](https://html.spec.whatwg.org/multipage/images.html#attr-img-decoding-async)"; "[`auto`](https://html.spec.whatwg.org/multipage/images.html#attr-img-decoding-auto)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-decoding
     */
    "decoding": string,
    /**
     * Used when determining loading deferral
     * 
     * **Type**: "[`lazy`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-lazy)"; "[`eager`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-eager)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-loading
     */
    "loading": string,
    /**
     * Sets the [priority](https://fetch.spec.whatwg.org/#request-priority) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: "[`auto`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-auto)"; "[`high`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-high)"; "[`low`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-low)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-fetchpriority
     */
    "fetchpriority": string
  },
  /**
   * Form control
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/input.html#the-input-element
   */
  "input": {
    /**
     * Hint for expected file type in [file upload controls](https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file))
     * 
     * **Type**: [Set of comma-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-comma-separated-tokens)* consisting of [valid MIME type strings with no parameters](https://mimesniff.spec.whatwg.org/#valid-mime-type-with-no-parameters) or `audio/*`, `video/*`, or `image/*`
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-accept
     */
    "accept": string,
    /**
     * Allow the color's alpha component to be set
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-alpha
     */
    "alpha": string,
    /**
     * Replacement text for use when images are not available
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-alt
     */
    "alt": string,
    /**
     * Hint for form autofill feature
     * 
     * **Type**: [Autofill field](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-field) name and related tokens*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
     */
    "autocomplete": string,
    /**
     * Whether the control is checked
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-checked
     */
    "checked": string,
    /**
     * The color space of the serialized color
     * 
     * **Type**: "[`limited-srgb`](https://html.spec.whatwg.org/multipage/input.html#attr-input-colorspace-limited-srgb)"; "[`display-p3`](https://html.spec.whatwg.org/multipage/input.html#attr-input-colorspace-display-p3)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-colorspace
     */
    "colorspace": string,
    /**
     * Name of form control to use for sending the element's [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) in [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-dirname
     */
    "dirname": string,
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
     */
    "disabled": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * [URL](https://url.spec.whatwg.org/#concept-url) to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formaction
     */
    "formaction": string,
    /**
     * [Entry list](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#entry-list) encoding type to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "[`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-urlencoded)"; "[`multipart/form-data`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-formdata)"; "[`text/plain`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-enctype-text)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formenctype
     */
    "formenctype": string,
    /**
     * Variant to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "`GET`"; "`POST`"; "`dialog`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formmethod
     */
    "formmethod": string,
    /**
     * Bypass form control validation for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formnovalidate
     */
    "formnovalidate": string,
    /**
     * [Navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formtarget
     */
    "formtarget": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string,
    /**
     * List of autocomplete options
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-list
     */
    "list": string,
    /**
     * Maximum value
     * 
     * **Type**: Varies*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-max
     */
    "max": string,
    /**
     * Maximum [length](https://infra.spec.whatwg.org/#string-length) of value
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-maxlength
     */
    "maxlength": string,
    /**
     * Minimum value
     * 
     * **Type**: Varies*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-min
     */
    "min": string,
    /**
     * Minimum [length](https://infra.spec.whatwg.org/#string-length) of value
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-minlength
     */
    "minlength": string,
    /**
     * Whether to allow multiple values
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-multiple
     */
    "multiple": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string,
    /**
     * Pattern to be matched by the form control's value
     * 
     * **Type**: Regular expression matching the JavaScript _[Pattern](https://tc39.es/ecma262/#prod-Pattern)_ production
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-pattern
     */
    "pattern": string,
    /**
     * User-visible label to be placed within the form control
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-placeholder
     */
    "placeholder": string,
    /**
     * Targets a popover element to toggle, show, or hide
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/popover.html#attr-popovertarget
     */
    "popovertarget": string,
    /**
     * Indicates whether a targeted popover element is to be toggled, shown, or hidden
     * 
     * **Type**: "[`toggle`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-toggle)"; "[`show`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-show)"; "[`hide`](https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction-hide)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/popover.html#attr-popovertargetaction
     */
    "popovertargetaction": string,
    /**
     * Whether to allow the value to be edited by the user
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-readonly
     */
    "readonly": string,
    /**
     * Whether the control is required for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-required
     */
    "required": string,
    /**
     * Size of the control
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-size
     */
    "size": string,
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-src
     */
    "src": string,
    /**
     * Granularity to be matched by the form control's value
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number) greater than zero, or "`any`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-step
     */
    "step": string,
    /**
     * Type of form control
     * 
     * **Type**: [`input` type keyword](https://html.spec.whatwg.org/multipage/input.html#attr-input-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-type
     */
    "type": string,
    /**
     * Value of the form control
     * 
     * **Type**: Varies*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-value
     */
    "value": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Description of pattern (when used with [`pattern`](https://html.spec.whatwg.org/multipage/input.html#attr-input-pattern) attribute)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/input.html#attr-input-title
     */
    "title": string
  },
  /**
   * An addition to the document
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/edits.html#the-ins-element
   */
  "ins": {
    /**
     * Link to the source of the quotation or more information about the edit
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/edits.html#attr-mod-cite
     */
    "cite": string,
    /**
     * Date and (optionally) time of the change
     * 
     * **Type**: [Valid date string with optional time](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string-with-optional-time)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/edits.html#attr-mod-datetime
     */
    "datetime": string
  },
  /**
   * User input
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element
   */
  "kbd": {
    
  },
  /**
   * Caption for a form control
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/forms.html#the-label-element
   */
  "label": {
    /**
     * Associate the label with form control
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/forms.html#attr-label-for
     */
    "for": string
  },
  /**
   * Caption for [`fieldset`](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element
   */
  "legend": {
    
  },
  /**
   * List item
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
   */
  "li": {
    /**
     * [Ordinal value](https://html.spec.whatwg.org/multipage/grouping-content.html#ordinal-value) of the list item
     * 
     * **Type**: [Valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/grouping-content.html#attr-li-value
     */
    "value": string
  },
  /**
   * Link metadata
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
   */
  "link": {
    /**
     * Address of the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href
     */
    "href": string,
    /**
     * How the element handles crossorigin requests
     * 
     * **Type**: "[`anonymous`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword)"; "[`use-credentials`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-use-credentials-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin
     */
    "crossorigin": string,
    /**
     * Relationship between the document containing the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) and the destination resource
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel
     */
    "rel": string,
    /**
     * [Potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination) for a preload request (for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`preload`](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)" and [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`modulepreload`](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload)")
     * 
     * **Type**: [Potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination), for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`preload`](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)"; [script-like destination](https://fetch.spec.whatwg.org/#request-destination-script-like), for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`modulepreload`](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as
     */
    "as": string,
    /**
     * Applicable media
     * 
     * **Type**: [Valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media
     */
    "media": string,
    /**
     * Language of the linked resource
     * 
     * **Type**: Valid BCP 47 language tag
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-hreflang
     */
    "hreflang": string,
    /**
     * Hint for the type of the referenced resource
     * 
     * **Type**: [Valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type
     */
    "type": string,
    /**
     * Sizes of the icons (for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`icon`](https://html.spec.whatwg.org/multipage/links.html#rel-icon)")
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens), [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive), consisting of sizes*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-sizes
     */
    "sizes": string,
    /**
     * Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`preload`](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)")
     * 
     * **Type**: Comma-separated list of [image candidate strings](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
     */
    "imagesrcset": string,
    /**
     * Image sizes for different page layouts (for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="[`preload`](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)")
     * 
     * **Type**: [Valid source size list](https://html.spec.whatwg.org/multipage/images.html#valid-source-size-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes
     */
    "imagesizes": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy
     */
    "referrerpolicy": string,
    /**
     * Integrity metadata used in Subresource Integrity checks [[SRI]](https://html.spec.whatwg.org/multipage/references.html#refsSRI)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity
     */
    "integrity": string,
    /**
     * Whether the element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking)
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-blocking
     */
    "blocking": string,
    /**
     * Color to use when customizing a site's icon (for [`rel`](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel)="`mask-icon`")
     * 
     * **Type**: CSS [<color>](https://drafts.csswg.org/css-color/#typedef-color)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-color
     */
    "color": string,
    /**
     * Whether the link is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-disabled
     */
    "disabled": string,
    /**
     * Sets the [priority](https://fetch.spec.whatwg.org/#request-priority) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: "[`auto`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-auto)"; "[`high`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-high)"; "[`low`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-low)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority
     */
    "fetchpriority": string,
    /**
     * [CSS style sheet set name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title
     */
    "title": string
  },
  /**
   * Container for the dominant contents of the document
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
   */
  "main": {
    
  },
  /**
   * [Image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element
   */
  "map": {
    /**
     * Name of [image map](https://html.spec.whatwg.org/multipage/image-maps.html#image-map) to [reference](https://html.spec.whatwg.org/multipage/dom.html#referenced) from the [`usemap`](https://html.spec.whatwg.org/multipage/image-maps.html#attr-hyperlink-usemap) attribute
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/image-maps.html#attr-map-name
     */
    "name": string
  },
  /**
   * Highlight
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element
   */
  "mark": {
    
  },
  /**
   * Menu of commands
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element
   */
  "menu": {
    
  },
  /**
   * Text metadata
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
   */
  "meta": {
    /**
     * Metadata name
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name
     */
    "name": string,
    /**
     * Pragma directive
     * 
     * **Type**: "[`content-type`](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-content-type)"; "[`default-style`](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-default-style)"; "[`refresh`](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-refresh)"; "[`x-ua-compatible`](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-x-ua-compatible)"; "[`content-security-policy`](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-content-security-policy)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv
     */
    "http-equiv": string,
    /**
     * Value of the element
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content
     */
    "content": string,
    /**
     * [Character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration)
     * 
     * **Type**: "`utf-8`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset
     */
    "charset": string,
    /**
     * Applicable media
     * 
     * **Type**: [Valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media
     */
    "media": string
  },
  /**
   * Gauge
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element
   */
  "meter": {
    /**
     * Current value of the element
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-value
     */
    "value": string,
    /**
     * Lower bound of range
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-min
     */
    "min": string,
    /**
     * Upper bound of range
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-max
     */
    "max": string,
    /**
     * High limit of low range
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-low
     */
    "low": string,
    /**
     * Low limit of high range
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-high
     */
    "high": string,
    /**
     * Optimum value in gauge
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-optimum
     */
    "optimum": string
  },
  /**
   * Section with navigational links
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-nav-element
   */
  "nav": {
    
  },
  /**
   * Fallback content for script
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element
   */
  "noscript": {
    
  },
  /**
   * Image, [child navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#child-navigable), or [plugin](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
   */
  "object": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-data
     */
    "data": string,
    /**
     * Type of embedded resource
     * 
     * **Type**: [Valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-type
     */
    "type": string,
    /**
     * Name of [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable)
     * 
     * **Type**: [Valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-name
     */
    "name": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string
  },
  /**
   * Ordered list
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
   */
  "ol": {
    /**
     * Number the list backwards
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-reversed
     */
    "reversed": string,
    /**
     * [Starting value](https://html.spec.whatwg.org/multipage/grouping-content.html#concept-ol-start) of the list
     * 
     * **Type**: [Valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-start
     */
    "start": string,
    /**
     * Kind of list marker
     * 
     * **Type**: "[`1`](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type-keyword-decimal)"; "[`a`](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type-keyword-lower-alpha)"; "[`A`](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type-keyword-upper-alpha)"; "[`i`](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type-keyword-lower-roman)"; "[`I`](https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type-keyword-upper-roman)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type
     */
    "type": string
  },
  /**
   * Group of options in a list box
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element
   */
  "optgroup": {
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-disabled
     */
    "disabled": string,
    /**
     * User-visible label
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-label
     */
    "label": string
  },
  /**
   * Option in a list box or combo box control
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element
   */
  "option": {
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-disabled
     */
    "disabled": string,
    /**
     * User-visible label
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-label
     */
    "label": string,
    /**
     * Whether the option is selected by default
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-selected
     */
    "selected": string,
    /**
     * Value to be used for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-value
     */
    "value": string
  },
  /**
   * Calculated output value
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
   */
  "output": {
    /**
     * Specifies controls from which the output was calculated
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of IDs*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-output-for
     */
    "for": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string
  },
  /**
   * Paragraph
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
   */
  "p": {
    
  },
  /**
   * Image
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element
   */
  "picture": {
    
  },
  /**
   * Block of preformatted text
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
   */
  "pre": {
    
  },
  /**
   * Progress bar
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element
   */
  "progress": {
    /**
     * Current value of the element
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-value
     */
    "value": string,
    /**
     * Upper bound of range
     * 
     * **Type**: [Valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-max
     */
    "max": string
  },
  /**
   * Quotation
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element
   */
  "q": {
    /**
     * Link to the source of the quotation or more information about the edit
     * 
     * **Type**: [Valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-q-cite
     */
    "cite": string
  },
  /**
   * Parenthesis for ruby annotation text
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element
   */
  "rp": {
    
  },
  /**
   * Ruby annotation text
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element
   */
  "rt": {
    
  },
  /**
   * Ruby annotation(s)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element
   */
  "ruby": {
    
  },
  /**
   * Inaccurate text
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element
   */
  "s": {
    
  },
  /**
   * Computer output
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element
   */
  "samp": {
    
  },
  /**
   * Embedded script
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/scripting.html#the-script-element
   */
  "script": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-src
     */
    "src": string,
    /**
     * Type of script
     * 
     * **Type**: "`module`"; a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type) that is not a [JavaScript MIME type essence match](https://mimesniff.spec.whatwg.org/#javascript-mime-type-essence-match)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type
     */
    "type": string,
    /**
     * Prevents execution in user agents that support [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-nomodule
     */
    "nomodule": string,
    /**
     * Execute script when available, without blocking while fetching
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async
     */
    "async": string,
    /**
     * Defer script execution
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer
     */
    "defer": string,
    /**
     * How the element handles crossorigin requests
     * 
     * **Type**: "[`anonymous`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword)"; "[`use-credentials`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-use-credentials-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-crossorigin
     */
    "crossorigin": string,
    /**
     * Integrity metadata used in Subresource Integrity checks [[SRI]](https://html.spec.whatwg.org/multipage/references.html#refsSRI)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-integrity
     */
    "integrity": string,
    /**
     * [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-referrerpolicy
     */
    "referrerpolicy": string,
    /**
     * Whether the element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking)
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-blocking
     */
    "blocking": string,
    /**
     * Sets the [priority](https://fetch.spec.whatwg.org/#request-priority) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element
     * 
     * **Type**: "[`auto`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-auto)"; "[`high`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-high)"; "[`low`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-low)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-script-fetchpriority
     */
    "fetchpriority": string
  },
  /**
   * Container for search controls
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element
   */
  "search": {
    
  },
  /**
   * Generic document or application section
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/sections.html#the-section-element
   */
  "section": {
    
  },
  /**
   * List box control
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
   */
  "select": {
    /**
     * Hint for form autofill feature
     * 
     * **Type**: [Autofill field](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-field) name and related tokens*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
     */
    "autocomplete": string,
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
     */
    "disabled": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * Whether to allow multiple values
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-multiple
     */
    "multiple": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string,
    /**
     * Whether the control is required for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-required
     */
    "required": string,
    /**
     * Size of the control
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-size
     */
    "size": string
  },
  /**
   * Shadow tree slot
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element
   */
  "slot": {
    /**
     * Name of shadow tree slot
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-slot-name
     */
    "name": string
  },
  /**
   * Side comment
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element
   */
  "small": {
    
  },
  /**
   * Image source for [`img`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) or media source for [`video`](https://html.spec.whatwg.org/multipage/media.html#the-video-element) or [`audio`](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
   */
  "source": {
    /**
     * Type of embedded resource
     * 
     * **Type**: [Valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-type
     */
    "type": string,
    /**
     * Applicable media
     * 
     * **Type**: [Valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-media
     */
    "media": string,
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-src
     */
    "src": string,
    /**
     * Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
     * 
     * **Type**: Comma-separated list of [image candidate strings](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset
     */
    "srcset": string,
    /**
     * Image sizes for different page layouts
     * 
     * **Type**: [Valid source size list](https://html.spec.whatwg.org/multipage/images.html#valid-source-size-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-sizes
     */
    "sizes": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string
  },
  /**
   * Generic phrasing container
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element
   */
  "span": {
    
  },
  /**
   * Importance
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element
   */
  "strong": {
    
  },
  /**
   * Embedded styling information
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-style-element
   */
  "style": {
    /**
     * Applicable media
     * 
     * **Type**: [Valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media
     */
    "media": string,
    /**
     * Whether the element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking)
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-style-blocking
     */
    "blocking": string,
    /**
     * [CSS style sheet set name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title
     */
    "title": string
  },
  /**
   * Subscript
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements
   */
  "sub": {
    
  },
  /**
   * Caption for [`details`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element
   */
  "summary": {
    
  },
  /**
   * Superscript
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements
   */
  "sup": {
    
  },
  /**
   * Table
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-table-element
   */
  "table": {
    
  },
  /**
   * Group of rows in a table
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element
   */
  "tbody": {
    
  },
  /**
   * Table cell
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
   */
  "td": {
    /**
     * Number of columns that the cell is to span
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-colspan
     */
    "colspan": string,
    /**
     * Number of rows that the cell is to span
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-rowspan
     */
    "rowspan": string,
    /**
     * The header cells for this cell
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of IDs*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-headers
     */
    "headers": string
  },
  /**
   * Template
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
   */
  "template": {
    /**
     * Enables streaming declarative shadow roots
     * 
     * **Type**: "`open`"; "`closed`"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode
     */
    "shadowrootmode": string,
    /**
     * Sets [delegates focus](https://dom.spec.whatwg.org/#shadowroot-delegates-focus) on a declarative shadow root
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootdelegatesfocus
     */
    "shadowrootdelegatesfocus": string,
    /**
     * Sets [clonable](https://dom.spec.whatwg.org/#shadowroot-clonable) on a declarative shadow root
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootclonable
     */
    "shadowrootclonable": string,
    /**
     * Sets [serializable](https://html.spec.whatwg.org/multipage/structured-data.html#serializable) on a declarative shadow root
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootserializable
     */
    "shadowrootserializable": string
  },
  /**
   * Multiline text controls
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
   */
  "textarea": {
    /**
     * Hint for form autofill feature
     * 
     * **Type**: [Autofill field](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-field) name and related tokens*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
     */
    "autocomplete": string,
    /**
     * Maximum number of characters per line
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-cols
     */
    "cols": string,
    /**
     * Name of form control to use for sending the element's [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) in [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-dirname
     */
    "dirname": string,
    /**
     * Whether the form control is disabled
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
     */
    "disabled": string,
    /**
     * Associates the element with a [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) element
     * 
     * **Type**: [ID](https://dom.spec.whatwg.org/#concept-id)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
     */
    "form": string,
    /**
     * Maximum [length](https://infra.spec.whatwg.org/#string-length) of value
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-maxlength
     */
    "maxlength": string,
    /**
     * Minimum [length](https://infra.spec.whatwg.org/#string-length) of value
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-minlength
     */
    "minlength": string,
    /**
     * Name of the element to use for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2) and in the [`form.elements`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
     */
    "name": string,
    /**
     * User-visible label to be placed within the form control
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-placeholder
     */
    "placeholder": string,
    /**
     * Whether to allow the value to be edited by the user
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-readonly
     */
    "readonly": string,
    /**
     * Whether the control is required for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-required
     */
    "required": string,
    /**
     * Number of lines to show
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-rows
     */
    "rows": string,
    /**
     * How the value of the form control is to be wrapped for [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)
     * 
     * **Type**: "[`soft`](https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap-soft)"; "[`hard`](https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap-hard)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap
     */
    "wrap": string
  },
  /**
   * Group of footer rows in a table
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element
   */
  "tfoot": {
    
  },
  /**
   * Table header cell
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-th-element
   */
  "th": {
    /**
     * Number of columns that the cell is to span
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) greater than zero
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-colspan
     */
    "colspan": string,
    /**
     * Number of rows that the cell is to span
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-rowspan
     */
    "rowspan": string,
    /**
     * The header cells for this cell
     * 
     * **Type**: [Unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) consisting of IDs*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-headers
     */
    "headers": string,
    /**
     * Specifies which cells the header cell applies to
     * 
     * **Type**: "[`row`](https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope-row)"; "[`col`](https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope-col)"; "[`rowgroup`](https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope-rowgroup)"; "[`colgroup`](https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope-colgroup)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope
     */
    "scope": string,
    /**
     * Alternative label to use for the header cell when referencing the cell in other contexts
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)*
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/tables.html#attr-th-abbr
     */
    "abbr": string
  },
  /**
   * Group of heading rows in a table
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-thead-element
   */
  "thead": {
    
  },
  /**
   * Machine-readable equivalent of date- or time-related data
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
   */
  "time": {
    /**
     * Machine-readable value
     * 
     * **Type**: [Valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string), [valid date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string), [valid yearless date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-yearless-date-string), [valid time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-string), [valid local date and time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-local-date-and-time-string), [valid time-zone offset string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-zone-offset-string), [valid global date and time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-global-date-and-time-string), [valid week string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-week-string), [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer), or [valid duration string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-time-datetime
     */
    "datetime": string
  },
  /**
   * Document title
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
   */
  "title": {
    
  },
  /**
   * Table row
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/tables.html#the-tr-element
   */
  "tr": {
    
  },
  /**
   * Timed text track
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/media.html#the-track-element
   */
  "track": {
    /**
     * Enable the track if no other [text track](https://html.spec.whatwg.org/multipage/media.html#text-track) is more suitable
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-track-default
     */
    "default": string,
    /**
     * The type of text track
     * 
     * **Type**: "[`subtitles`](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-keyword-subtitles)"; "[`captions`](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-keyword-captions)"; "[`descriptions`](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-keyword-descriptions)"; "[`chapters`](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-keyword-chapters)"; "[`metadata`](https://html.spec.whatwg.org/multipage/media.html#attr-track-kind-keyword-metadata)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-track-kind
     */
    "kind": string,
    /**
     * User-visible label
     * 
     * **Type**: [Text](https://html.spec.whatwg.org/multipage/dom.html#attribute-text)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-track-label
     */
    "label": string,
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-track-src
     */
    "src": string,
    /**
     * Language of the text track
     * 
     * **Type**: Valid BCP 47 language tag
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-track-srclang
     */
    "srclang": string
  },
  /**
   * Unarticulated annotation
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element
   */
  "u": {
    
  },
  /**
   * List
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
   */
  "ul": {
    
  },
  /**
   * Variable
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element
   */
  "var": {
    
  },
  /**
   * Video player
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/media.html#the-video-element
   */
  "video": {
    /**
     * Address of the resource
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-src
     */
    "src": string,
    /**
     * How the element handles crossorigin requests
     * 
     * **Type**: "[`anonymous`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword)"; "[`use-credentials`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-use-credentials-keyword)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin
     */
    "crossorigin": string,
    /**
     * Poster frame to show prior to video playback
     * 
     * **Type**: [Valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-video-poster
     */
    "poster": string,
    /**
     * Hints how much buffering the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) will likely need
     * 
     * **Type**: "[`none`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-none)"; "[`metadata`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-metadata)"; "[`auto`](https://html.spec.whatwg.org/multipage/media.html#attr-media-preload-auto)"
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-preload
     */
    "preload": string,
    /**
     * Hint that the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) can be started automatically when the page is loaded
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay
     */
    "autoplay": string,
    /**
     * Encourage the user agent to display video content within the element's playback area
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-video-playsinline
     */
    "playsinline": string,
    /**
     * Whether to loop the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource)
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-loop
     */
    "loop": string,
    /**
     * Whether to mute the [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) by default
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-muted
     */
    "muted": string,
    /**
     * Show user agent controls
     * 
     * **Type**: [Boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/media.html#attr-media-controls
     */
    "controls": string,
    /**
     * Horizontal dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
     */
    "width": string,
    /**
     * Vertical dimension
     * 
     * **Type**: [Valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer)
     * 
     * **Specs**:
     * - https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
     */
    "height": string
  },
  /**
   * Line breaking opportunity
   * 
   * **Spec**: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element
   */
  "wbr": {
    
  }
}