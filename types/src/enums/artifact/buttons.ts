/**
 * @enum {string} EButtons
 * @description Defines types used for the button component.
 * @prop ACTION Removes label and icon and is themed in brands primary colors
 * @prop ERROR Themed button in brands accent error color
 * @prop PRIMARY Themed button in brands primary color
 * @prop SECONDARY Themed button in brands secondary color
 * @prop DEFAULT Default grey styled button
 * @prop GHOST Button with no background or border
 */
export enum EButtons {
    ACTION = 'action',
    DEFAULT = 'default',
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    GHOST = 'ghost',
}
