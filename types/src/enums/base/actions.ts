/**
 * @enum {string} EActions
 * @description Defines action types.
 * @prop BUTTON Adds customizable button(s) as an action.
 * @prop CLICK Acts as a wrapper for a click handler (when used with Action).
 * @prop CLOSE Adds a close button as an action.
 * @prop LABELED Adds a labeled (e.g. OK) button as an action.
 * @prop MINI_BUTTON Adds a mini button as an action.
 * @prop NONE Blanks out actions.
 */
export enum EActions {
    BUTTON = 'button',
    CLICK = 'click',
    CLOSE = 'close',
    LABELED = 'labeled',
    MINI_BUTTON = 'mini_button',
    NONE = 'none',
}
