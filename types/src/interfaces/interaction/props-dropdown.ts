import type {IDropdownItem} from '../../'

/**
 * @interface IPropsDropdown
 * @description The properties for the dropdown component.
 * @props `dividers` `false` Defines whether the dropdown items should be seperated with dividers
 * @props `finalDivider` `false` Defines whether the last dropdown item should have a divider
 * @props `items` `undefined` Defines the items of the dropdown
 */
export interface IPropsDropdown {
    dividers?: boolean
    finalDivider?: boolean
    items?: IDropdownItem[]
}
