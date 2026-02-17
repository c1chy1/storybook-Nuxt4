/** This enum collection is used to define basic values. */

/**
 * @enum {string} EDirections
 * @description Defines basic directional values.
 * @prop HORIZONTAL Represents a horizontal direction
 * @prop VERTICAL Represents a vertical direction
 */
export enum EDirections {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
}

/**
 * @enum {string} EOrders
 * @description Defines basic ordering values.
 * @prop ASC Represents ascending order
 * @prop DESC Represents descending order
 */
export enum EOrders {
    ASC = 'asc',
    DESC = 'desc',
}

/**
 * @enum {string} ESizes
 * @description Defines common sizes for ui elements.
 * @prop SMALL Represents a small size
 * @prop DEFAULT Represents a default size
 * @prop BIG Represents a big size
 */
export enum ESizes {
    SMALL = 'small',
    DEFAULT = 'default',
    BIG = 'big',
}

/**
 * @enum {string} EColors
 * @description Defines a set of colors.
 * @prop PRIMARY Represents the primary color, used for main actions and highlights.
 * @prop SECONDARY Represents the secondary color, used for secondary actions.
 * @prop TERTIARY Represents the tertiary color, used for less emphasized actions.
 * @prop SUCCESS Represents the success color, used for successful actions or messages.
 * @prop WARNING Represents the warning color, used for cautionary messages.
 * @prop DANGER Represents the danger color, used for error messages or critical actions.
 * @prop INFO Represents the info color, used for informational messages.
 * @prop LIGHT Sets the color to white
 * @prop DARK Sets the color to black (#161616)
 * @prop GREY Sets the color to grey (#AAAEB7)
 * @prop CUSTOM Represents a custom color, allowing for flexibility in design.
 */
export enum EColors {
    PRIMARY = 'primary', // brand-primary
    SECONDARY = 'secondary', // brand-secondary
    TERTIARY = 'tertiary', // brand-tertiary
    SUCCESS = 'success', // additional-success
    WARNING = 'warning', // additional-warning
    DANGER = 'danger', // additional-danger
    INFO = 'info', // additional-info
    LIGHT = 'light', // additional-white
    DARK = 'dark', // additional-black
    GREY = 'grey', // additional-grey
    CUSTOM = 'custom',
}

/**
 * @enum {string} ECorners
 * @description Defines rounded corners for ui elements.
 * @prop NONE Represents no rounded corners
 * @prop DEFAULT Represents default rounded corners
 * @prop LARGE_ROUNDED Represents large rounded corners
 * @prop FULL_ROUNDED Represents full rounded corners
 */
export enum ECorners {
    NONE = 'none',
    DEFAULT = 'default',
    MID_ROUNDED = 'mid-rounded',
    LARGE_ROUNDED = 'large-rounded',
    FULL_ROUNDED = 'full-rounded',
}

/**
 * @enum {string} EPositions
 * @description Defines basic positions for elements.
 * @prop TOP Represents a top position
 * @prop TOP_LEFT Represents a top-left position
 * @prop TOP_RIGHT Represents a top-right position
 * @prop BOTTOM Represents a bottom position
 * @prop BOTTOM_LEFT Represents a bottom-left position
 * @prop BOTTOM_RIGHT Represents a bottom-right position
 * @prop LEFT Represents a left position
 * @prop RIGHT Represents a right position
 * @prop NONE Represents a position without any alignment
 */
export enum EPositions {
    TOP = 'top',
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right',
    BOTTOM = 'bottom',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_RIGHT = 'bottom-right',
    LEFT = 'left',
    RIGHT = 'right',
    NONE = 'none',
}

/**
 * @enum {string} EStatus
 * @description Defines current status of progress.
 * @prop COMPLETED A status that has been completed
 * @prop CURRENT Represents a current status
 * @prop UPCOMING Represents an upcoming status
 */
export enum EStatus {
    COMPLETED = 'completed',
    CURRENT = 'current',
    UPCOMING = 'upcoming',
}

/**
 * @enum {string} EFittings
 * @description Represents an element fitting behaviour in the container.
 * @prop CONTAIN The element will be scaled to fit the container
 * @prop COVER The element will be scaled to cover the container
 * @prop FILL The element will be stretched to fill the container
 * @prop FIT The element will be resized to fit the container
 * @prop NONE The element has no fitting behaviour
 * @prop SCALE_DOWN The element will be resized to fit the container, but will not be resized if it is smaller
 */
export enum EFittings {
    CONTAIN = 'contain',
    COVER = 'cover',
    FILL = 'fill',
    FIT = 'fit',
    NONE = 'none',
    SCALE_DOWN = 'scale-down',
}
