import type {EDirections, ESizes} from '../../'

/**
 * @interface IPropsSwitch
 * @description The properties for the input switch component.
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input switch
 * @props `disabled` `undefined` Defines whether the input switch is disabled
 * @props `error` `undefined` Defines whether the input switch has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input switch
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input switch is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input switch
 * @props `toggleMode` `undefined` When true, switches between only true/false states (no null state)
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input switch should show a warning
 * @example
 * ```vue
 * <!-- Default 3-state behavior (true/false/null) -->
 * <Switch
 *   v-model="switchRef"
 *   v-bind="args"
 * />
 *
 * <!-- Toggle mode (only true/false states) -->
 * <Switch
 *   v-model="toggleRef"
 *   :toggle-mode="true"
 *   v-bind="args"
 * />
 *
 * // For 3-state mode
 * const switchRef = ref<boolean | null>(null); // initial value
 *
 * // For toggle mode
 * const toggleRef = ref<boolean>(false); // initial value
 * ```
 */
export interface IPropsSwitch {
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    modelValue?: boolean | null
    name?: string
    required?: boolean
    size?: ESizes.DEFAULT | ESizes.SMALL
    toggleMode?: boolean
    tooltip?: string
    warning?: boolean
}
