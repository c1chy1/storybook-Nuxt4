import type {EDirections, ESizes, IMedia} from '../../'

/**
 * @interface IInput
 * @description Defines properties for an input component.
 * @props `direction` `undefined` Sets the direction of the input field
 * @props `disabled` `undefined` Disables the input field
 * @props `error` `undefined` Defines whether the input field has an error
 * @props `icon` `undefined` Defines the icon properties
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input field
 * @props `max` `undefined` Sets the maximum value for supported input types
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `outline` `undefined` Defines whether the input field is outlined
 * @props `placeholder` `undefined` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input field is required
 * @props `rule` `undefined` Sets the validation rule
 * @props `selected` `undefined` Defines whether the input field is selected (for selection inputs)
 * @props `size` `undefined` Sets the size of the input field
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Sets the initial value
 */
export interface IInput {
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    icon?: IMedia
    id?: string
    label?: string
    max?: number | string
    modelValue?: any
    name?: string
    outline?: boolean
    placeholder?: string
    required?: boolean
    rule?: RegExp
    selected?: boolean
    size?: ESizes
    tooltip?: string
    value?: any
}
