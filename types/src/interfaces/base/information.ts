import type {IMedia} from '../../'

/**
 * @interface IInformation
 * @description Defines the structure of basic information.
 * @props `disabled` `undefined` Defines if the element is disabled
 * @props `icon` `undefined` Sets the icon of an element
 * @props `id` `undefined` Unique id of the element
 * @props `label` `undefined` Sets the label of an element
 */
export interface IInformation {
    disabled?: boolean
    icon?: IMedia
    id?: string
    label?: string
}
