/**
 * @enum {string} ELists
 * @description Defines types used for the list component.
 * @prop ALPHA Represents list items with bullet points
 * @prop BUTTON Represents list items as clickable entries
 * @prop HTML Represents and parses HTML for list items
 * @prop LINK Represents list items as links
 * @prop LIST Represents default list
 * @prop NUMBER Represents list items with iterated numbers
 */
export enum ELists {
    ALPHA = 'alpha',
    BUTTON = 'button',
    HTML = 'html',
    LINK = 'link',
    LIST = 'list',
    NUMBER = 'number',
}
