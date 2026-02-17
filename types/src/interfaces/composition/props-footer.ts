import type {ENavigations, IBar, IFooterColumn, IMedia} from '../../'

/**
 * @interface IPropsFooter
 * @description Defines properties for the footer component.
 * @props `bar` `undefined` Defines the footer bar
 * @props `items` `undefined` Defines the footer columns items
 * @props `logo` `undefined` Sets the logo of the footer
 * @props `type` `ENavigations.DEFAULT` Defines the type of navigation
 */
export interface IPropsFooter {
    bar?: IBar
    items?: IFooterColumn[]
    logo?: IMedia
    type?: ENavigations
}
