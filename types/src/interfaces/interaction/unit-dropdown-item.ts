import type {IMedia} from '../base'
import type {IDropdownItem} from './dropdown-item'

/**
 * @interface IUnitDropdownItem
 * @description The properties for a unit dropdown item.
 * @props `icon` `undefined` Defines the icon for the dropdown item
 * @props `id` `undefined` Sets the id for the dropdown item
 * @props `label` `undefined` Sets the label for the dropdown item
 * @props `onClick` `undefined` Defines the click event for the dropdown item
 */
export interface IUnitDropdownItem {
    icon?: IMedia
    id?: string
    label?: string
    onClick?: (item: IDropdownItem) => void
}
