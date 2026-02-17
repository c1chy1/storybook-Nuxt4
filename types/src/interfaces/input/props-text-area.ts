import type {ECorners, EDirections, ESizes} from '../../'

/**
 * @interface IPropsTextArea
 * @description The properties for the input textarea component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `counter` `undefined` If set, a counter will be displayed below the textarea
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the textarea
 * @props `disabled` `undefined` Defines whether the textarea is disabled
 * @props `error` `undefined` Defines whether the textarea has an error
 * @props `height` `62` Sets the height of the textarea
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the textarea
 * @props `max` `undefined` Sets the maximum length of the textarea
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `outline` `undefined` Defines whether the textarea is outlined
 * @props `placeholder` `undefined` Sets the placeholder of the textarea
 * @props `required` `undefined` Defines whether the textarea is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the textarea
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the textarea should show a warning
 * @example
 * ```vue
 * <TextArea
 *   v-model="textRef"
 *   v-bind="args"
 * />
 *
 * const textRef = ref<string>('text'); // initial text
 * ```
 */
export interface IPropsTextArea {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    counter?: boolean
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    height?: number
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
}
