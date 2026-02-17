import type {INavigation} from '../../'

/**
 * @interface IPropsBreadcrumb
 * @description The properties for the breadcrumb component.
 * @props `items` `undefined` Defines the items in the breadcrumb
 * @props `root` `undefined` Sets the information of the root element
 */
export interface IPropsBreadcrumb {
    items?: INavigation[]
    root?: INavigation
}
