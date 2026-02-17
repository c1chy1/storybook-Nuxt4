import type {IMedia} from '../../'

/**
 * @interface ISelectItem
 * @description Sets the properties of a select item.
 * @props `disabled` `undefined` Defines whether the select item is disabled
 * @props `icon` `undefined` Sets the icon of the select item
 * @props `label` `undefined` Sets the label of the select item
 * @props `name` `undefined` Sets the name of the select item, is exclusively used for the radio component
 * @props `selected` `undefined` Defines whether the select item is (pre-)selected
 * @props `value` `undefined` Sets the value (id) of the select item
 */
export interface ISelectItem {
    disabled?: boolean
    icon?: IMedia
    label?: string
    name?: string
    selected?: boolean
    value?: string
}
