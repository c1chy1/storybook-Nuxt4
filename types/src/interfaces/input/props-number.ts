import type {ECorners, EDirections, EInputVariants, ESizes} from '../../'

/**
 * @interface IPropsNumber
 * @description The properties for the input number component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input number
 * @props `disabled` `undefined` Defines whether the input number is disabled
 * @props `error` `undefined` Defines whether the input number has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input number
 * @props `max` `undefined` Sets the maximum value
 * @props `min` `undefined` Sets the minimum value
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `placeholder` `undefined` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input number is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input number
 * @props `step` `1` Sets the step value
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Sets the initial value
 * @props `warning` `undefined` Defines whether the input number should show a warning
 * @example
 * ```vue
 * <Number
 *   v-model="numberRef"
 *   v-bind="args"
 * />
 *
 * const numberRef = ref<string>('1234'); // initial number
 * ```
 */
export interface IPropsNumber {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: number | string
    min?: number
    modelValue?: number | string
    name?: string
    placeholder?: string
    required?: boolean
    size?: ESizes
    step?: number
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
