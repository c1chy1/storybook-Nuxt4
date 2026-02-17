import type {EHeadlines} from '../../'

/**
 * @interface IPropsHeadline
 * @description The properties for the headline component.
 * @props `classification` `EHeadlines.H1` Defines which HTML class tag the component should be rendered in
 * @props `format` `EHeadlines.H1` Defines which HTML class tag the component should be shown as
 * @props `title` `undefined` Sets the title of the headline
 */
export interface IPropsHeadline {
    classification?: EHeadlines
    format?: EHeadlines
    title?: string
}
