/**
 * @enum {string} ELinks
 * @description Defines types used for the link component.
 * @prop DEFAULT Basic hoverable link with an icon
 * @prop DROPDOWN Link is enhanced with a popover and a dropdown menu
 * @prop INVERTED Inverted link with an icon to be used in dark
 * @prop SUBLINK Basic link with reduced size
 * @prop TEXTLINK Basic link to be used in text that is themed in brands primary color
 */
export enum ELinks {
    DEFAULT = 'default',
    DROPDOWN = 'dropdown',
    INVERTED = 'inverted',
    SUBLINK = 'sublink',
    TEXTLINK = 'textlink',
}
