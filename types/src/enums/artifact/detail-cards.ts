/**
 * @enum {string} EDetailCards
 * @description Defines types used for the detail card component.
 * @prop DETAIL Has no close button and can be used as a detail view within a page or a component
 * @prop POPUP Has a close button and is meant to be used as a modal
 */
export enum EDetailCards {
    DETAIL = 'detail',
    POPUP = 'popup',
}
