/**
 * @enum {string} ETooltipPositions
 * @description Defines positions for tooltip components.
 * @prop TOP Tooltip appears above the element
 * @prop BOTTOM Tooltip appears below the element
 * @prop LEFT Tooltip appears to the left of the element
 * @prop RIGHT Tooltip appears to the right of the element
 */
export enum ETooltipPositions {
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right',
}

/**
 * @enum {string} ETooltipThemes
 * @description Defines theme variants for tooltip components.
 * @prop DEFAULT Default tooltip theme with dark background
 * @prop ERROR Error tooltip theme with red background
 * @prop WARNING Warning tooltip theme with orange background
 */
export enum ETooltipThemes {
    DEFAULT = 'default',
    ERROR = 'error',
    WARNING = 'warning',
}
