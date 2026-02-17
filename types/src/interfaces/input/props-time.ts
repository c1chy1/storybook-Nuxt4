import type {ECorners, EDirections, EInputVariants, ESizes} from '../../'

/**
 * @interface IPropsTime
 * @description The properties for the input time component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input time
 * @props `disabled` `undefined` Defines whether the input time is disabled
 * @props `error` `undefined` Defines whether the input time has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input time
 * @props `max` `undefined` Sets the maximum length of the input time
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input time is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input time
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Sets the initial value
 * @props `warning` `undefined` Defines whether the input time should show a warning
 * @props `variant` `EInputVariants.DEFAULT` Sets the variant of the input time
 * @example
 * ```vue
 * <Time
 *   v-model="timeRef"
 *   v-bind="args"
 * />
 *
 * const timeRef = ref<string>('12:00'); // initial time
 * ```
 */
export interface IPropsTime {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: string
    modelValue?: string
    name?: string
    required?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
