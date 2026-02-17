import type {EDirections, ESizes} from '../../enums'
import type {IDatesOrRange} from './dates-or-range'

/**
 * @interface IPropsDatePicker
 * @description The properties for the input date picker component.
 * @prop `direction` `EDirections.VERTICAL` Sets the direction
 * @prop `disabled` `undefined` Toggles the disabled state
 * @prop `disabledDates` `undefined` Sets the disabled dates
 * @prop `error` `undefined` Toggles the error state
 * @prop `id` `undefined` Sets the unique id
 * @prop `label` `undefined` Sets the label
 * @prop `locale` `en-US` Sets the locale/language
 * @prop `maxDate` `undefined` Sets the maximum date
 * @prop `minDate` `undefined` Sets the minimum date
 * @prop `modelValue` `undefined` Sets the model value
 * @prop `name` `undefined` Sets the name
 * @prop `open` `undefined` Toggles the open state of the dropdown
 * @prop `placeholder` `undefined` Sets the placeholder
 * @prop `required` `undefined` Defines the required state
 * @prop `size` `ESizes.SMALL` Sets the size
 * @prop `startOfWeek` `1` Sets the start of the week, initially set to Monday
 * @prop `tooltip` `undefined` Sets the tooltip
 * @prop `warning` `undefined` Toggles the warning state
 */
export interface IPropsDatePicker {
    direction?: EDirections
    disabled?: boolean
    disabledDates?: Array<Date | string>
    error?: boolean
    id?: string
    label?: string
    locale?: string
    maxDate?: Date | string
    minDate?: Date | string
    modelValue?: Array<IDatesOrRange>
    name?: string
    open?: boolean
    placeholder?: string
    required?: boolean
    size?: ESizes.DEFAULT | ESizes.SMALL
    startOfWeek?: 1 | 2 | 3 | 4 | 5 | 6 | 7 // 1 = Monday, 7 = Sunday
    tooltip?: string
    warning?: boolean
}
