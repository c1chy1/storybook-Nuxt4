import type {EColors, IMedia} from '../../'

/**
 * @interface IPropsToggle
 * @description The properties for the input toggle component.
 * @props `activeIcon` `undefined` Defines the active icon
 * @props `defaultIcon` `undefined` Defines the default (inactive) icon
 * @props `disabled` `undefined` Defines whether the input toggle is disabled
 * @props `error` `undefined` Defines whether the input toggle has an error
 * @props `icon` `undefined` Toggles the icon visibility
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input toggle
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input toggle is required
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `type` `EColors.SUCCESS` Defines the type of the input toggle
 * @props `warning` `undefined` Defines whether the input toggle should show a warning
 * @example
 * ```vue
 * <Toggle
 *   v-model="toggleRef"
 *   v-bind="args"
 * />
 *
 * const toggleRef = ref<boolean>(false); // initial value
 * ```
 */
export interface IPropsToggle {
    activeIcon?: IMedia
    defaultIcon?: IMedia
    disabled?: boolean
    error?: boolean
    icon?: boolean
    id?: string
    label?: string
    modelValue?: boolean
    name?: string
    required?: boolean
    tooltip?: string
    type?: EColors
    warning?: boolean
}
