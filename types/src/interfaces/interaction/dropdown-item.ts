import type {IMedia} from '../../'

/**
 * @interface IDropdownItem
 * @description Defines structure of a dropdown item.
 * @props `disabled` `undefined` Defines if the dropdown item is disabled
 * @props `icon` `undefined` Sets the icon of the dropdown item
 * @props `id` `undefined` Unique id of the dropdown item
 * @props `onClick` `undefined` Handles the click event of the dropdown item
 * @props `path` `undefined` Sets the path of the dropdown item
 * @props `title` `undefined` Sets the title of the dropdown item
 * @props `url` `undefined` Sets the url of the dropdown item
 */
export interface IDropdownItem {
    disabled?: boolean
    icon?: IMedia
    id?: string
    onClick?: (item: IDropdownItem) => void
    path?: string
    title?: string
    url?: string
}
