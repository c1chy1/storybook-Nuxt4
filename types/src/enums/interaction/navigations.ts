/**
 * @enum {string} ENavigations
 * @description Defines types used for the header and footer component.
 * @prop {string} DEFAULT Default navigation layout without a top/bottom bar
 * @prop {string} BAR_ONLY Layout only with top/bottom bar
 * @prop {string} WITH_BAR Navigation layout with a top/bottom bar
 */
export enum ENavigations {
    DEFAULT = 'default',
    BAR_ONLY = 'bar_only',
    WITH_BAR = 'with_bar',
}
