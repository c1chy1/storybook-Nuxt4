/**
 * @interface IPropsRange
 * @description The properties for the input range component.
 * @props `disabled` `undefined` Defines whether the input range is disabled
 * @props `error` `undefined` Defines whether the input range has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input range
 * @props `max` `100` The maximum range number
 * @props `min` `0` The minimum range number
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input range is required
 * @props `step` `1` The step value
 * @props `tooltip` `undefined` Sets the tooltip of the input range
 * @props `value` `undefined` Sets the initial value
 * @props `warning` `undefined` Defines whether the input range should show a warning
 * @example
 * ```vue
 * <Range
 *   v-model="rangeRef"
 *   v-bind="args"
 * />
 *
 * const rangeRef = ref<number>(0); // initial range value
 * ```
 */
export interface IPropsRange {
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: number
    min?: number
    modelValue?: number
    name?: string
    required?: boolean
    step?: number
    tooltip?: string
    warning?: boolean
}
