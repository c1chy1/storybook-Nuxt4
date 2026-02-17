/**
 * @enum {string} EOverlays
 * @description Defines types used for overlay components.
 * @prop DEFAULT Type with darkened background, which is closable through outside click
 * @prop FORCE_CLOSE Type with darkened background, which is not closable through outside click
 * @prop NO_CLOSE The overlay is not closable through outside click or close button (should be closed from outside)
 */
export enum EOverlays {
    DEFAULT = 'default',
    FORCE_CLOSE = 'force_close',
    NO_CLOSE = 'no_close',
}
