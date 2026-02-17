import type {IPropsLink} from '../../'

/**
 * @interface IBar
 * @description Defines structure of a navigation top or bottom bar.
 * @props `links` `undefined` Sets the navigation links of the bar
 * @props `title` `undefined` Sets the title of the bar
 */
export interface IBar {
    links?: IPropsLink[]
    title?: string
}
