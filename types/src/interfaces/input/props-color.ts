/**
 * @interface IPropsColor
 * @description The properties for the input color component.
 * @props `closeButton` `undefined` Shows the close button
 * @props `colorShortcutsLabel` `undefined` Sets the label of the color shortcuts
 * @props `error` `undefined` Sets the error state of the input color
 * @props `id` `undefined` Sets the unique id
 * @props `initialColors` `undefined` The preset colors to be used as shortcuts
 * @props `label` `undefined` Sets the label of the input color
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input color is required
 * @props `showColorPicker` `undefined` Shows the color picker palette
 * @props `showColorShortcuts` `undefined` Displays the color shortcuts
 * @props `showHexInput` `undefined` Shows the hex text input
 * @props `showHuePicker` `undefined` Shows the hue picker range
 * @props `tooltip` `undefined` Sets the tooltip message
 * @props `warning` `undefined` Sets the warning state of the input color
 * @example
 * ```vue
 * <Color
 *   v-model="activeColor"
 *   v-bind="args"
 * />
 *
 * const activeColor = ref<string>('#000000'); // initial color
 * ```
 */
export interface IPropsColor {
    error?: boolean
    id?: string
    initialColors?: string[]
    label?: string
    modelValue?: string
    name?: string
    required?: boolean
    showColorPicker?: boolean
    showColorShortcuts?: boolean
    showHexInput?: boolean
    showHuePicker?: boolean
    tooltip?: string
    warning?: boolean
}
