/**
 * @interface IPropsCheckbox
 * @description The properties for the input checkbox component.
 * @props `disabled` `undefined` Defines whether the input checkbox is disabled
 * @props `error` `undefined` Defines whether the input checkbox has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input checkbox
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input checkbox is required
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input checkbox should show a warning
 * @example
 * ```vue
 * <Checkbox
 *   v-model="isSelected"
 *   v-bind="args"
 * />
 *
 * const isSelected = ref<boolean>(true); // initial value
 * ```
 */
export interface IPropsCheckbox {
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    modelValue?: boolean
    name?: string
    required?: boolean
    tooltip?: string
    warning?: boolean
}
