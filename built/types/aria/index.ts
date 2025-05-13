type WithRole =
  | {
    /**
     * A type of [live region](https://w3c.github.io/aria/#dfn-live-region) with important, and usually time-sensitive, information. See related [`alertdialog`](https://w3c.github.io/aria/#alertdialog) and [`status`](https://w3c.github.io/aria/#status).
     * 
     * **Spec**: https://w3c.github.io/aria/#alert
     */
    "role": "alert"
  }
  | {
    /**
     * A type of dialog that contains an alert message, where initial focus goes to an [element](https://dom.spec.whatwg.org/#concept-element) within the dialog. See related [`alert`](https://w3c.github.io/aria/#alert) and [`dialog`](https://w3c.github.io/aria/#dialog).
     * 
     * **Spec**: https://w3c.github.io/aria/#alertdialog
     */
    "role": "alertdialog"
  }
  | {
    /**
     * A [`structure`](https://w3c.github.io/aria/#structure) containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a [`widget`](https://w3c.github.io/aria/#widget) role.
     * 
     * **Spec**: https://w3c.github.io/aria/#application
     */
    "role": "application"
  }
  | {
    /**
     * A section of a page that consists of a composition that forms an independent part of a document, page, or site.
     * 
     * **Spec**: https://w3c.github.io/aria/#article
     */
    "role": "article"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) that contains mostly site-oriented content, rather than page-specific content.
     * 
     * **Spec**: https://w3c.github.io/aria/#banner
     */
    "role": "banner"
  }
  | {
    /**
     * A section of content that is quoted from another source.
     * 
     * **Spec**: https://w3c.github.io/aria/#blockquote
     */
    "role": "blockquote"
  }
  | {
    /**
     * An input that allows for user-triggered actions when clicked or pressed. See related [`link`](https://w3c.github.io/aria/#link).
     * 
     * **Spec**: https://w3c.github.io/aria/#button
     */
    "role": "button"
  }
  | {
    /**
     * Visible content that names, or describes a [`figure`](https://w3c.github.io/aria/#figure), [`grid`](https://w3c.github.io/aria/#grid), [`group`](https://w3c.github.io/aria/#group), [`radiogroup`](https://w3c.github.io/aria/#radiogroup), [`table`](https://w3c.github.io/aria/#table) or [`treegrid`](https://w3c.github.io/aria/#treegrid).
     * 
     * **Spec**: https://w3c.github.io/aria/#caption
     */
    "role": "caption"
  }
  | {
    /**
     * A cell in a tabular container. See related [`gridcell`](https://w3c.github.io/aria/#gridcell).
     * 
     * **Spec**: https://w3c.github.io/aria/#cell
     */
    "role": "cell"
  }
  | {
    /**
     * A checkable input that has three possible values: `true`, `false`, or `mixed`.
     * 
     * **Spec**: https://w3c.github.io/aria/#checkbox
     */
    "role": "checkbox"
  }
  | {
    /**
     * A section whose content represents a fragment of computer code.
     * 
     * **Spec**: https://w3c.github.io/aria/#code
     */
    "role": "code"
  }
  | {
    /**
     * A cell containing header information for a column.
     * 
     * **Spec**: https://w3c.github.io/aria/#columnheader
     */
    "role": "columnheader"
  }
  | {
    /**
     * An [`input`](https://w3c.github.io/aria/#input) that controls another element, such as a [`listbox`](https://w3c.github.io/aria/#listbox) or [`grid`](https://w3c.github.io/aria/#grid), that can dynamically pop up to help the user set the value of the [`input`](https://w3c.github.io/aria/#input).
     * 
     * **Spec**: https://w3c.github.io/aria/#combobox
     */
    "role": "combobox"
  }
  | {
    /**
     * A comment contains content expressing reaction to other content.
     * 
     * **Spec**: https://w3c.github.io/aria/#comment
     */
    "role": "comment"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) that is designed to be complementary to the main content that it is a sibling to, or a direct descendant of. The contents of a complementary landmark would be expected to remain meaningful if it were to be separated from the main content it is relevant to.
     * 
     * **Spec**: https://w3c.github.io/aria/#complementary
     */
    "role": "complementary"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) that contains information about the parent document.
     * 
     * **Spec**: https://w3c.github.io/aria/#contentinfo
     */
    "role": "contentinfo"
  }
  | {
    /**
     * A definition of a term or concept. See related [`term`](https://w3c.github.io/aria/#term).
     * 
     * **Spec**: https://w3c.github.io/aria/#definition
     */
    "role": "definition"
  }
  | {
    /**
     * A deletion represents content that is marked as removed, content that is being suggested for removal, or content that is no longer relevant in the context of its accompanying content. See related [`insertion`](https://w3c.github.io/aria/#insertion).
     * 
     * **Spec**: https://w3c.github.io/aria/#deletion
     */
    "role": "deletion"
  }
  | {
    /**
     * A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document.
     * 
     * **Spec**: https://w3c.github.io/aria/#dialog
     */
    "role": "dialog"
  }
  | {
    /**
     * [Deprecated in ARIA 1.2] A list of references to members of a group, such as a static table of contents.
     * 
     * **Spec**: https://w3c.github.io/aria/#directory
     */
    "role": "directory"
  }
  | {
    /**
     * An [element](https://dom.spec.whatwg.org/#concept-element) containing content that [assistive technology](https://w3c.github.io/aria/#dfn-assistive-technologies) users might want to browse in a reading mode.
     * 
     * **Spec**: https://w3c.github.io/aria/#document
     */
    "role": "document"
  }
  | {
    /**
     * One or more emphasized characters. See related [`strong`](https://w3c.github.io/aria/#strong).
     * 
     * **Spec**: https://w3c.github.io/aria/#emphasis
     */
    "role": "emphasis"
  }
  | {
    /**
     * A scrollable [`list`](https://w3c.github.io/aria/#list) of [`articles`](https://w3c.github.io/aria/#article) where scrolling might cause [`articles`](https://w3c.github.io/aria/#article) to be added to or removed from either end of the list.
     * 
     * **Spec**: https://w3c.github.io/aria/#feed
     */
    "role": "feed"
  }
  | {
    /**
     * A perceivable [`section`](https://w3c.github.io/aria/#section) of content that typically contains a [graphical document](https://w3c.github.io/aria/#dfn-graphical-document), images, media player, code snippets, or example text. The parts of a `figure` _MAY_ be user-navigable.
     * 
     * **Spec**: https://w3c.github.io/aria/#figure
     */
    "role": "figure"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) region that contains a collection of items and objects that, as a whole, combine to create a form. See related [`search`](https://w3c.github.io/aria/#search).
     * 
     * **Spec**: https://w3c.github.io/aria/#form
     */
    "role": "form"
  }
  | {
    /**
     * A nameless container [element](https://dom.spec.whatwg.org/#concept-element) that has no semantic meaning on its own.
     * 
     * **Spec**: https://w3c.github.io/aria/#generic
     */
    "role": "generic"
  }
  | {
    /**
     * A composite [`widget`](https://w3c.github.io/aria/#widget) containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.
     * 
     * **Spec**: https://w3c.github.io/aria/#grid
     */
    "role": "grid"
  }
  | {
    /**
     * A [`cell`](https://w3c.github.io/aria/#cell) in a [`grid`](https://w3c.github.io/aria/#grid) or [`treegrid`](https://w3c.github.io/aria/#treegrid).
     * 
     * **Spec**: https://w3c.github.io/aria/#gridcell
     */
    "role": "gridcell"
  }
  | {
    /**
     * A set of user interface [objects](https://w3c.github.io/aria/#dfn-object) that is not intended to be included in a page summary or table of contents by [assistive technologies](https://w3c.github.io/aria/#dfn-assistive-technologies).
     * 
     * **Spec**: https://w3c.github.io/aria/#group
     */
    "role": "group"
  }
  | {
    /**
     * A heading for a section of the page.
     * 
     * **Spec**: https://w3c.github.io/aria/#heading
     */
    "role": "heading"
  }
  | {
    /**
     * A container for a collection of [elements](https://dom.spec.whatwg.org/#concept-element) that form an image. See synonym [`img`](https://w3c.github.io/aria/#img).
     * 
     * **Spec**: https://w3c.github.io/aria/#image
     */
    "role": "image"
  }
  | {
    /**
     * A container for a collection of [elements](https://dom.spec.whatwg.org/#concept-element) that form an image. See synonym [`image`](https://w3c.github.io/aria/#image).
     * 
     * **Spec**: https://w3c.github.io/aria/#img
     */
    "role": "img"
  }
  | {
    /**
     * An insertion contains content that is marked as added or content that is being suggested for addition. See related [`deletion`](https://w3c.github.io/aria/#deletion).
     * 
     * **Spec**: https://w3c.github.io/aria/#insertion
     */
    "role": "insertion"
  }
  | {
    /**
     * An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related [`button`](https://w3c.github.io/aria/#button).
     * 
     * **Spec**: https://w3c.github.io/aria/#link
     */
    "role": "link"
  }
  | {
    /**
     * A [`section`](https://w3c.github.io/aria/#section) containing [`listitem`](https://w3c.github.io/aria/#listitem) elements. See related [`listbox`](https://w3c.github.io/aria/#listbox).
     * 
     * **Spec**: https://w3c.github.io/aria/#list
     */
    "role": "list"
  }
  | {
    /**
     * A [widget](https://w3c.github.io/aria/#dfn-widget) that allows the user to select one or more items from a list of choices. See related [`combobox`](https://w3c.github.io/aria/#combobox) and [`list`](https://w3c.github.io/aria/#list).
     * 
     * **Spec**: https://w3c.github.io/aria/#listbox
     */
    "role": "listbox"
  }
  | {
    /**
     * A single item in a list or directory.
     * 
     * **Spec**: https://w3c.github.io/aria/#listitem
     */
    "role": "listitem"
  }
  | {
    /**
     * A type of [live region](https://w3c.github.io/aria/#dfn-live-region) where new information is added in meaningful order and old information can disappear. See related [`marquee`](https://w3c.github.io/aria/#marquee).
     * 
     * **Spec**: https://w3c.github.io/aria/#log
     */
    "role": "log"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) containing the main content of a document.
     * 
     * **Spec**: https://w3c.github.io/aria/#main
     */
    "role": "main"
  }
  | {
    /**
     * Content which is marked or highlighted for reference or notation purposes, due to the content's relevance in the enclosing context.
     * 
     * **Spec**: https://w3c.github.io/aria/#mark
     */
    "role": "mark"
  }
  | {
    /**
     * A type of [live region](https://w3c.github.io/aria/#dfn-live-region) where non-essential information changes frequently. See related [`log`](https://w3c.github.io/aria/#log).
     * 
     * **Spec**: https://w3c.github.io/aria/#marquee
     */
    "role": "marquee"
  }
  | {
    /**
     * Content that represents a mathematical expression.
     * 
     * **Spec**: https://w3c.github.io/aria/#math
     */
    "role": "math"
  }
  | {
    /**
     * A type of [widget](https://w3c.github.io/aria/#dfn-widget) that offers a list of choices to the user.
     * 
     * **Spec**: https://w3c.github.io/aria/#menu
     */
    "role": "menu"
  }
  | {
    /**
     * A presentation of [`menu`](https://w3c.github.io/aria/#menu) that usually remains visible and is usually presented horizontally.
     * 
     * **Spec**: https://w3c.github.io/aria/#menubar
     */
    "role": "menubar"
  }
  | {
    /**
     * An option in a set of choices contained by a [`menu`](https://w3c.github.io/aria/#menu) or [`menubar`](https://w3c.github.io/aria/#menubar).
     * 
     * **Spec**: https://w3c.github.io/aria/#menuitem
     */
    "role": "menuitem"
  }
  | {
    /**
     * A [`menuitem`](https://w3c.github.io/aria/#menuitem) with a checkable state whose possible values are `true`, `false`, or `mixed`.
     * 
     * **Spec**: https://w3c.github.io/aria/#menuitemcheckbox
     */
    "role": "menuitemcheckbox"
  }
  | {
    /**
     * A checkable [`menuitem`](https://w3c.github.io/aria/#menuitem) in a set of elements with the same role, only one of which can be checked at a time.
     * 
     * **Spec**: https://w3c.github.io/aria/#menuitemradio
     */
    "role": "menuitemradio"
  }
  | {
    /**
     * An [element](https://dom.spec.whatwg.org/#concept-element) that represents a scalar measurement within a known range, or a fractional value. See related [`progressbar`](https://w3c.github.io/aria/#progressbar).
     * 
     * **Spec**: https://w3c.github.io/aria/#meter
     */
    "role": "meter"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) containing a collection of navigational [elements](https://dom.spec.whatwg.org/#concept-element) (usually links) for navigating the document or related documents.
     * 
     * **Spec**: https://w3c.github.io/aria/#navigation
     */
    "role": "navigation"
  }
  | {
    /**
     * An [element](https://dom.spec.whatwg.org/#concept-element) whose implicit native role semantics will not be mapped to the [accessibility API](https://w3c.github.io/aria/#dfn-accessibility-api). See synonym [`presentation`](https://w3c.github.io/aria/#presentation).
     * 
     * **Spec**: https://w3c.github.io/aria/#none
     */
    "role": "none"
  }
  | {
    /**
     * A [`section`](https://w3c.github.io/aria/#section) whose content represents additional information or parenthetical context to the primary content it supplements.
     * 
     * **Spec**: https://w3c.github.io/aria/#note
     */
    "role": "note"
  }
  | {
    /**
     * An item in a [`listbox`](https://w3c.github.io/aria/#listbox).
     * 
     * **Spec**: https://w3c.github.io/aria/#option
     */
    "role": "option"
  }
  | {
    /**
     * A paragraph of content.
     * 
     * **Spec**: https://w3c.github.io/aria/#paragraph
     */
    "role": "paragraph"
  }
  | {
    /**
     * An [element](https://dom.spec.whatwg.org/#concept-element) whose implicit native role semantics will not be mapped to the [accessibility API](https://w3c.github.io/aria/#dfn-accessibility-api). See synonym [`none`](https://w3c.github.io/aria/#none).
     * 
     * **Spec**: https://w3c.github.io/aria/#presentation
     */
    "role": "presentation"
  }
  | {
    /**
     * An [element](https://dom.spec.whatwg.org/#concept-element) that displays the progress status for tasks that take a long time.
     * 
     * **Spec**: https://w3c.github.io/aria/#progressbar
     */
    "role": "progressbar"
  }
  | {
    /**
     * A checkable input in a group of elements with the same role, only one of which can be checked at a time.
     * 
     * **Spec**: https://w3c.github.io/aria/#radio
     */
    "role": "radio"
  }
  | {
    /**
     * A group of [`radio`](https://w3c.github.io/aria/#radio) buttons.
     * 
     * **Spec**: https://w3c.github.io/aria/#radiogroup
     */
    "role": "radiogroup"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.
     * 
     * **Spec**: https://w3c.github.io/aria/#region
     */
    "role": "region"
  }
  | {
    /**
     * A row of cells in a tabular container.
     * 
     * **Spec**: https://w3c.github.io/aria/#row
     */
    "role": "row"
  }
  | {
    /**
     * A structure containing one or more row elements in a tabular container.
     * 
     * **Spec**: https://w3c.github.io/aria/#rowgroup
     */
    "role": "rowgroup"
  }
  | {
    /**
     * A cell containing header information for a row.
     * 
     * **Spec**: https://w3c.github.io/aria/#rowheader
     */
    "role": "rowheader"
  }
  | {
    /**
     * A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.
     * 
     * **Spec**: https://w3c.github.io/aria/#scrollbar
     */
    "role": "scrollbar"
  }
  | {
    /**
     * A [`landmark`](https://w3c.github.io/aria/#landmark) region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related [`form`](https://w3c.github.io/aria/#form) and [`searchbox`](https://w3c.github.io/aria/#searchbox).
     * 
     * **Spec**: https://w3c.github.io/aria/#search
     */
    "role": "search"
  }
  | {
    /**
     * A type of textbox intended for specifying search criteria. See related [`textbox`](https://w3c.github.io/aria/#textbox) and [`search`](https://w3c.github.io/aria/#search).
     * 
     * **Spec**: https://w3c.github.io/aria/#searchbox
     */
    "role": "searchbox"
  }
  | {
    /**
     * A set of user interface objects and information representing information about its closest ancestral content group. For instance, a `sectionfooter` can include information about who wrote the specific section of content, such as an [`article`](https://w3c.github.io/aria/#article). It can contain links to related documents, copyright information or other indices and colophon specific to the current section of the page.
     * 
     * **Spec**: https://w3c.github.io/aria/#sectionfooter
     */
    "role": "sectionfooter"
  }
  | {
    /**
     * A set of user interface objects and information that represents a collection of introductory items for the element's closest ancestral content group. For instance, a `sectionheader` can include the heading, introductory statement and related meta data for a section of content, for instance a [`region`](https://w3c.github.io/aria/#region) or [`article`](https://w3c.github.io/aria/#article), within a web page.
     * 
     * **Spec**: https://w3c.github.io/aria/#sectionheader
     */
    "role": "sectionheader"
  }
  | {
    /**
     * A divider that separates and distinguishes sections of content or groups of menuitems.
     * 
     * **Spec**: https://w3c.github.io/aria/#separator
     */
    "role": "separator"
  }
  | {
    /**
     * An input where the user selects a value from within a given range.
     * 
     * **Spec**: https://w3c.github.io/aria/#slider
     */
    "role": "slider"
  }
  | {
    /**
     * A form of [`range`](https://w3c.github.io/aria/#range) that expects the user to select from among discrete choices.
     * 
     * **Spec**: https://w3c.github.io/aria/#spinbutton
     */
    "role": "spinbutton"
  }
  | {
    /**
     * A type of [live region](https://w3c.github.io/aria/#dfn-live-region) whose content is advisory information for the user but is not important enough to justify an [`alert`](https://w3c.github.io/aria/#alert), often but not necessarily presented as a status bar.
     * 
     * **Spec**: https://w3c.github.io/aria/#status
     */
    "role": "status"
  }
  | {
    /**
     * Content that is important, serious, or urgent. See related [`emphasis`](https://w3c.github.io/aria/#emphasis).
     * 
     * **Spec**: https://w3c.github.io/aria/#strong
     */
    "role": "strong"
  }
  | {
    /**
     * One or more subscripted characters. See related [`superscript`](https://w3c.github.io/aria/#superscript).
     * 
     * **Spec**: https://w3c.github.io/aria/#subscript
     */
    "role": "subscript"
  }
  | {
    /**
     * A single proposed change to content.
     * 
     * **Spec**: https://w3c.github.io/aria/#suggestion
     */
    "role": "suggestion"
  }
  | {
    /**
     * One or more superscripted characters. See related [`subscript`](https://w3c.github.io/aria/#subscript).
     * 
     * **Spec**: https://w3c.github.io/aria/#superscript
     */
    "role": "superscript"
  }
  | {
    /**
     * A type of checkbox that represents on/off values, as opposed to checked/unchecked values. See related [`checkbox`](https://w3c.github.io/aria/#checkbox).
     * 
     * **Spec**: https://w3c.github.io/aria/#switch
     */
    "role": "switch"
  }
  | {
    /**
     * A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
     * 
     * **Spec**: https://w3c.github.io/aria/#tab
     */
    "role": "tab"
  }
  | {
    /**
     * A [`section`](https://w3c.github.io/aria/#section) containing data arranged in rows and columns. See related [`grid`](https://w3c.github.io/aria/#grid).
     * 
     * **Spec**: https://w3c.github.io/aria/#table
     */
    "role": "table"
  }
  | {
    /**
     * A list of [`tab`](https://w3c.github.io/aria/#tab) [elements](https://dom.spec.whatwg.org/#concept-element), which are references to [`tabpanel`](https://w3c.github.io/aria/#tabpanel) elements.
     * 
     * **Spec**: https://w3c.github.io/aria/#tablist
     */
    "role": "tablist"
  }
  | {
    /**
     * A container for the resources associated with a [`tab`](https://w3c.github.io/aria/#tab), where each [`tab`](https://w3c.github.io/aria/#tab) is contained in a [`tablist`](https://w3c.github.io/aria/#tablist).
     * 
     * **Spec**: https://w3c.github.io/aria/#tabpanel
     */
    "role": "tabpanel"
  }
  | {
    /**
     * A word or phrase with an optional corresponding definition. See related [`definition`](https://w3c.github.io/aria/#definition).
     * 
     * **Spec**: https://w3c.github.io/aria/#term
     */
    "role": "term"
  }
  | {
    /**
     * A type of input that allows free-form text as its value.
     * 
     * **Spec**: https://w3c.github.io/aria/#textbox
     */
    "role": "textbox"
  }
  | {
    /**
     * An element that represents a specific point in time.
     * 
     * **Spec**: https://w3c.github.io/aria/#time
     */
    "role": "time"
  }
  | {
    /**
     * A type of [live region](https://w3c.github.io/aria/#dfn-live-region) containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.
     * 
     * **Spec**: https://w3c.github.io/aria/#timer
     */
    "role": "timer"
  }
  | {
    /**
     * A collection of commonly used function buttons or controls represented in compact visual form.
     * 
     * **Spec**: https://w3c.github.io/aria/#toolbar
     */
    "role": "toolbar"
  }
  | {
    /**
     * A contextual popup that displays a description for an element.
     * 
     * **Spec**: https://w3c.github.io/aria/#tooltip
     */
    "role": "tooltip"
  }
  | {
    /**
     * A [`widget`](https://w3c.github.io/aria/#widget) that allows the user to select one or more items from a hierarchically organized collection.
     * 
     * **Spec**: https://w3c.github.io/aria/#tree
     */
    "role": "tree"
  }
  | {
    /**
     * A [`grid`](https://w3c.github.io/aria/#grid) whose rows can be expanded and collapsed in the same manner as for a [`tree`](https://w3c.github.io/aria/#tree).
     * 
     * **Spec**: https://w3c.github.io/aria/#treegrid
     */
    "role": "treegrid"
  }
  | {
    /**
     * An item in a [`tree`](https://w3c.github.io/aria/#tree).
     * 
     * **Spec**: https://w3c.github.io/aria/#treeitem
     */
    "role": "treeitem"
  }

export interface GlobalAriaAttributes {
  role: WithRole["role"],
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the currently active element when DOM focus is on a [`composite`](https://w3c.github.io/aria/#composite) widget, [`combobox`](https://w3c.github.io/aria/#combobox), [`textbox`](https://w3c.github.io/aria/#textbox), [`group`](https://w3c.github.io/aria/#group), or [`application`](https://w3c.github.io/aria/#application).
   * 
   * **Type**: [ID reference](https://w3c.github.io/aria/#valuetype_idref)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-activedescendant
   */
  "aria-activedescendant": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether [assistive technologies](https://w3c.github.io/aria/#dfn-assistive-technologies) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://w3c.github.io/aria/#aria-relevant) attribute.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-atomic
   */
  "aria-atomic": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether inputting text could trigger display of one or more predictions of the user's intended value for a [`combobox`](https://w3c.github.io/aria/#combobox), [`searchbox`](https://w3c.github.io/aria/#searchbox), or [`textbox`](https://w3c.github.io/aria/#textbox) and specifies how predictions would be presented if they were made.
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-autocomplete
   */
  "aria-autocomplete": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a string value that labels the current element, which is intended to be converted into Braille. See related [`aria-label`](https://w3c.github.io/aria/#aria-label).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-braillelabel
   */
  "aria-braillelabel": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a human-readable, author-localized abbreviated description for the [role](https://w3c.github.io/aria/#dfn-role) of an [element](https://dom.spec.whatwg.org/#concept-element), which is intended to be converted into Braille. See related [`aria-roledescription`](https://w3c.github.io/aria/#aria-roledescription).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-brailleroledescription
   */
  "aria-brailleroledescription": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) an element is being modified and that assistive technologies could wait until the modifications are complete before exposing them to the user.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-busy
   */
  "aria-busy": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the current "checked" [state](https://w3c.github.io/aria/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://w3c.github.io/aria/#dfn-widget). See related [`aria-pressed`](https://w3c.github.io/aria/#aria-pressed) and [`aria-selected`](https://w3c.github.io/aria/#aria-selected).
   * 
   * **Type**: [tristate](https://w3c.github.io/aria/#valuetype_tristate)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-checked
   */
  "aria-checked": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the total number of columns in a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-colindex`](https://w3c.github.io/aria/#aria-colindex).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-colcount
   */
  "aria-colcount": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) an [element's](https://dom.spec.whatwg.org/#concept-element) column index or position with respect to the total number of columns within a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-colindextext`](https://w3c.github.io/aria/#aria-colindextext), [`aria-colcount`](https://w3c.github.io/aria/#aria-colcount), and [`aria-colspan`](https://w3c.github.io/aria/#aria-colspan).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-colindex
   */
  "aria-colindex": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a human readable text alternative of [`aria-colindex`](https://w3c.github.io/aria/#aria-colindex). See related [`aria-rowindextext`](https://w3c.github.io/aria/#aria-rowindextext).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-colindextext
   */
  "aria-colindextext": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the number of columns spanned by a cell or gridcell within a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-colindex`](https://w3c.github.io/aria/#aria-colindex) and [`aria-rowspan`](https://w3c.github.io/aria/#aria-rowspan).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-colspan
   */
  "aria-colspan": number | string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the [element](https://dom.spec.whatwg.org/#concept-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://w3c.github.io/aria/#aria-owns).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-controls
   */
  "aria-controls": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the [element](https://dom.spec.whatwg.org/#concept-element) that represents the current item within a container or set of related elements.
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-current
   */
  "aria-current": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the [element](https://dom.spec.whatwg.org/#concept-element) (or elements) that describes the [object](https://w3c.github.io/aria/#dfn-object). See related [`aria-labelledby`](https://w3c.github.io/aria/#aria-labelledby) and [`aria-description`](https://w3c.github.io/aria/#aria-description).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-describedby
   */
  "aria-describedby": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a string value that describes or annotates the current element. See related [`aria-describedby`](https://w3c.github.io/aria/#aria-describedby).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-description
   */
  "aria-description": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the [element](https://dom.spec.whatwg.org/#concept-element) (or elements) that provide additional information related to the [object](https://w3c.github.io/aria/#dfn-object). See related [`aria-describedby`](https://w3c.github.io/aria/#aria-describedby).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-details
   */
  "aria-details": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) that the [element](https://dom.spec.whatwg.org/#concept-element) is [perceivable](https://w3c.github.io/aria/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://w3c.github.io/aria/#dfn-operable). See related [`aria-hidden`](https://w3c.github.io/aria/#aria-hidden) and [`aria-readonly`](https://w3c.github.io/aria/#aria-readonly).
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-disabled
   */
  "aria-disabled": string,
  /**
   * [Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target.
   * 
   * **Type**: [token list](https://w3c.github.io/aria/#valuetype_token_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-dropeffect
   */
  "aria-dropeffect": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the [element](https://dom.spec.whatwg.org/#concept-element) (or elements) that provides an error message for an [object](https://w3c.github.io/aria/#dfn-object). See related [`aria-invalid`](https://w3c.github.io/aria/#aria-invalid) and [`aria-describedby`](https://w3c.github.io/aria/#aria-describedby).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-errormessage
   */
  "aria-errormessage": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether a related element is expanded (shown) or collapsed (hidden).
   * 
   * **Type**: [true/false/undefined](https://w3c.github.io/aria/#valuetype_true-false-undefined)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-expanded
   */
  "aria-expanded": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the next [element](https://dom.spec.whatwg.org/#concept-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-flowto
   */
  "aria-flowto": string,
  /**
   * [Deprecated in ARIA 1.1] Indicates an element's "grabbed" [state](https://w3c.github.io/aria/#dfn-state) in a drag-and-drop operation.
   * 
   * **Type**: [true/false/undefined](https://w3c.github.io/aria/#valuetype_true-false-undefined)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-grabbed
   */
  "aria-grabbed": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://dom.spec.whatwg.org/#concept-element).
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-haspopup
   */
  "aria-haspopup": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates), when set to `true`, that an [element](https://dom.spec.whatwg.org/#concept-element) and its entire subtree are hidden from assistive technology, regardless of whether it is visibly rendered.
   * 
   * **Type**: [true/false/undefined](https://w3c.github.io/aria/#valuetype_true-false-undefined)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-hidden
   */
  "aria-hidden": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://w3c.github.io/aria/#aria-errormessage).
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-invalid
   */
  "aria-invalid": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) keyboard shortcuts that an author has implemented to activate or give focus to an element.
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-keyshortcuts
   */
  "aria-keyshortcuts": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a string value that labels the current element. See related [`aria-labelledby`](https://w3c.github.io/aria/#aria-labelledby).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-label
   */
  "aria-label": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) the [element](https://dom.spec.whatwg.org/#concept-element) (or elements) that labels the current element. See related [`aria-label`](https://w3c.github.io/aria/#aria-label) and [`aria-describedby`](https://w3c.github.io/aria/#aria-describedby).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-labelledby
   */
  "aria-labelledby": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the hierarchical level of an [element](https://dom.spec.whatwg.org/#concept-element) within a structure.
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-level
   */
  "aria-level": number | string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) that an [element](https://dom.spec.whatwg.org/#concept-element) will be updated, and describes the types of updates the [user agents](https://infra.spec.whatwg.org/#user-agent), [assistive technologies](https://w3c.github.io/aria/#dfn-assistive-technologies), and user can expect from the [live region](https://w3c.github.io/aria/#dfn-live-region).
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-live
   */
  "aria-live": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether an [element](https://dom.spec.whatwg.org/#concept-element) is modal when displayed.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-modal
   */
  "aria-modal": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether a text box accepts multiple lines of input or only a single line.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-multiline
   */
  "aria-multiline": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) that the user can select more than one item from the current selectable descendants.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-multiselectable
   */
  "aria-multiselectable": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-orientation
   */
  "aria-orientation": string,
  /**
   * [Identifies](https://w3c.github.io/aria/#dfn-identifies) an [element](https://dom.spec.whatwg.org/#concept-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://w3c.github.io/aria/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://w3c.github.io/aria/#aria-controls).
   * 
   * **Type**: [ID reference list](https://w3c.github.io/aria/#valuetype_idref_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-owns
   */
  "aria-owns": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-placeholder
   */
  "aria-placeholder": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) an [element](https://dom.spec.whatwg.org/#concept-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://w3c.github.io/aria/#aria-setsize).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-posinset
   */
  "aria-posinset": number | string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the current "pressed" [state](https://w3c.github.io/aria/#dfn-state) of toggle buttons. See related [`aria-checked`](https://w3c.github.io/aria/#aria-checked) and [`aria-selected`](https://w3c.github.io/aria/#aria-selected).
   * 
   * **Type**: [tristate](https://w3c.github.io/aria/#valuetype_tristate)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-pressed
   */
  "aria-pressed": string,
  /**
   * Indicates that the [element](https://dom.spec.whatwg.org/#concept-element) is not editable, but is otherwise [operable](https://w3c.github.io/aria/#dfn-operable). See related [`aria-disabled`](https://w3c.github.io/aria/#aria-disabled).
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-readonly
   */
  "aria-readonly": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) what notifications the user agent will trigger when the [accessibility tree](https://w3c.github.io/aria/#dfn-accessibility-tree) within a live region is modified. See related [`aria-atomic`](https://w3c.github.io/aria/#aria-atomic).
   * 
   * **Type**: [token list](https://w3c.github.io/aria/#valuetype_token_list)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-relevant
   */
  "aria-relevant": string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) that user input is required on the [element](https://dom.spec.whatwg.org/#concept-element) before a form can be submitted.
   * 
   * **Type**: [true/false](https://w3c.github.io/aria/#valuetype_true-false)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-required
   */
  "aria-required": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a human-readable, author-localized description for the [role](https://w3c.github.io/aria/#dfn-role) of an [element](https://dom.spec.whatwg.org/#concept-element).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-roledescription
   */
  "aria-roledescription": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the total number of rows in a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-rowindex`](https://w3c.github.io/aria/#aria-rowindex).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-rowcount
   */
  "aria-rowcount": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) an [element's](https://dom.spec.whatwg.org/#concept-element) row index or position with respect to the total number of rows within a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-rowindextext`](https://w3c.github.io/aria/#aria-rowindextext), [`aria-rowcount`](https://w3c.github.io/aria/#aria-rowcount), and [`aria-rowspan`](https://w3c.github.io/aria/#aria-rowspan).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-rowindex
   */
  "aria-rowindex": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) a human readable text alternative of [`aria-rowindex`](https://w3c.github.io/aria/#aria-rowindex). See related [`aria-colindextext`](https://w3c.github.io/aria/#aria-colindextext).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-rowindextext
   */
  "aria-rowindextext": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the number of rows spanned by a cell or gridcell within a [`table`](https://w3c.github.io/aria/#table), [`grid`](https://w3c.github.io/aria/#grid), or [`treegrid`](https://w3c.github.io/aria/#treegrid). See related [`aria-rowindex`](https://w3c.github.io/aria/#aria-rowindex) and [`aria-colspan`](https://w3c.github.io/aria/#aria-colspan).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-rowspan
   */
  "aria-rowspan": number | string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) the current "selected" [state](https://w3c.github.io/aria/#dfn-state) of various [widgets](https://w3c.github.io/aria/#dfn-widget). See related [`aria-checked`](https://w3c.github.io/aria/#aria-checked) and [`aria-pressed`](https://w3c.github.io/aria/#aria-pressed).
   * 
   * **Type**: [true/false/undefined](https://w3c.github.io/aria/#valuetype_true-false-undefined)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-selected
   */
  "aria-selected": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://w3c.github.io/aria/#aria-posinset).
   * 
   * **Type**: [integer](https://w3c.github.io/aria/#valuetype_integer)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-setsize
   */
  "aria-setsize": number | string,
  /**
   * [Indicates](https://w3c.github.io/aria/#dfn-indicates) if items in a table or grid are sorted in ascending or descending order.
   * 
   * **Type**: [token](https://w3c.github.io/aria/#valuetype_token)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-sort
   */
  "aria-sort": string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the maximum allowed value for a range [widget](https://w3c.github.io/aria/#dfn-widget).
   * 
   * **Type**: [number](https://w3c.github.io/aria/#valuetype_number)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-valuemax
   */
  "aria-valuemax": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the minimum allowed value for a range [widget](https://w3c.github.io/aria/#dfn-widget).
   * 
   * **Type**: [number](https://w3c.github.io/aria/#valuetype_number)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-valuemin
   */
  "aria-valuemin": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the current value for a range [widget](https://w3c.github.io/aria/#dfn-widget). See related [`aria-valuetext`](https://w3c.github.io/aria/#aria-valuetext).
   * 
   * **Type**: [number](https://w3c.github.io/aria/#valuetype_number)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-valuenow
   */
  "aria-valuenow": number | string,
  /**
   * [Defines](https://w3c.github.io/aria/#dfn-defines) the human readable text alternative of [`aria-valuenow`](https://w3c.github.io/aria/#aria-valuenow) for a range [widget](https://w3c.github.io/aria/#dfn-widget).
   * 
   * **Type**: [string](https://w3c.github.io/aria/#valuetype_string)
   * 
   * **Spec**: https://w3c.github.io/aria/#aria-valuetext
   */
  "aria-valuetext": string
}