import type {IFooterItem} from '../../'

/**
 * @interface IFooterColumn
 * @description Defines properties for the footer column component.
 * @props `items` `undefined` Defines the footer items
 * @props `title` `undefined` Sets the title of the footer column
 */
export interface IFooterColumn {
    items?: IFooterItem[]
    title?: string
}
