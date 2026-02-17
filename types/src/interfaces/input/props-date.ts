import type {ECorners, EDirections, EInputVariants, ESizes} from '../../'

/**
 * @interface IPropsDate
 * @description The properties for the input date component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input date
 * @props `disabled` `undefined` Defines whether the input date is disabled
 * @props `error` `undefined` Defines whether the input date has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input date
 * @props `max` `undefined` Sets the maximum date
 * @props `min` `undefined` Sets the minimum date
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `placeholder` `undefined` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input date is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input date
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input date should show a warning
 * @example
 * ```vue
 * <Date
 *   v-model="dateRef"
 *   v-bind="args"
 * />
 *
 * const dateRef = ref<string>('2024-12-04'); // initial date
 * ```
 */
export interface IPropsDate {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: string
    min?: string
    modelValue?: string
    name?: string
    placeholder?: string
    required?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
