import type {IPropsFooter, IPropsHeader} from '../../'

/**
 * @interface IPropsBasicPage
 * @description Defines properties for the base layout composition component.
 * @props `footerProps` `undefined` Sets the properties for the footer
 * @props `headerProps` `undefined` Sets the properties for the header
 */
export interface IPropsBasicPage {
    footerProps?: IPropsFooter
    headerProps?: IPropsHeader
}
