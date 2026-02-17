import type {ECorners, EDirections, EInputVariants, ESizes, IMedia} from '../../'

/**
 * @interface IPropsText
 * @description The properties for the input text component.
 * @props `corners` `ECorners.DEFAULT` Sets the corners of the input text
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input text
 * @props `disabled` `undefined` Defines whether the input text is disabled
 * @props `error` `undefined` Defines whether the input text has an error
 * @props `icon` `undefined` Sets the icon of the input text
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input text
 * @props `max` `undefined` Sets the maximum length of the input text
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `outline` `true` Defines whether the input text is outlined
 * @props `placeholder` `undefined` Sets the placeholder of the input text
 * @props `required` `undefined` Defines whether the input text is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input text
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Sets the initial value
 * @props `warning` `undefined` Defines whether the input text should show a warning
 * @props `variant` `EInputVariants.DEFAULT` Sets the variant of the input text
 * @example
 * ```vue
 * <Text
 *   v-model="textRef"
 *   v-bind="args"
 * />
 *
 * const textRef = ref<string>('text'); // initial text
 * ```
 */
export interface IPropsText {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED | ECorners.MID_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    icon?: IMedia
    id?: string
    label?: string
    max?: number | string
    modelValue?: string
    name?: string
    outline?: boolean
    placeholder?: string
    required?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
