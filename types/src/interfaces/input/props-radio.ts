/**
 * @interface IPropsRadio
 * @description The properties for the input radio component.
 * @props `disabled` `undefined` Defines whether the input radio is disabled
 * @props `error` `undefined` Defines whether the input radio has an error
 * @props `id` `undefined` Sets the unique id of the radio item. If not provided, a random id will be generated
 * @props `label` `undefined` Sets the label of the input radio
 * @props `modelValue` `undefined` Defines the current selected value within the radio group. To be selected,
 * `value` or alternatively `id` prop must be set to a unique value. If the `modelValue` is equal to the `value` prop,
 * the radio item will be checked. Consider setting the `name` prop to group the radio items and binding the
 * `modelValue` to a reactive variable across all radio items (see example)
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input radio is required
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `value` `undefined` Actual (unique) value of the radio item. If the `modelValue` is equal to the `value` prop,
 * the radio item will be checked
 * @props `warning` `undefined` Defines whether the input radio should show a warning
 * @example
 * ```vue
 * <fieldset>
 *    <Radio :value="'radio-1'" v-model="vm" :name="'radio-group'"/>
 *    <Radio :value="'radio-2'" v-model="vm" :name="'radio-group'"/>
 *    <Radio :value="'radio-3'" v-model="vm" :name="'radio-group'"/>
 * </fieldset>
 *
 * const vm = ref('radio-1'); // selected radio item within the radio group
 * ```
 */
export interface IPropsRadio {
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    modelValue?: string
    name?: string
    required?: boolean
    tooltip?: string
    value?: string
    warning?: boolean
}
