import type {ECorners, EDirections, EInputVariants, ESizes} from '../../'

/**
 * @interface IPropsPassword
 * @description The properties for the input password component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input password
 * @props `disabled` `undefined` Defines whether the input password is disabled
 * @props `error` `undefined` Defines whether the input password has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input password
 * @props `max` `undefined` Sets the maximum length
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `placeholder` `undefined` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input password is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input password
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Sets the initial value
 * @props `warning` `undefined` Defines whether the input password should show a warning
 * @example
 * ```vue
 * <Password
 *   v-model="passwordRef"
 *   v-bind="args"
 * />
 *
 * const passwordRef = ref<string>('password'); // initial password
 * ```
 */
export interface IPropsPassword {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: number | string
    modelValue?: string
    name?: string
    placeholder?: string
    required?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
