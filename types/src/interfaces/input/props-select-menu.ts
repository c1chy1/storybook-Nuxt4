import type {ECorners, EInputVariants, ESizes, ISelectItem} from '../../'

/**
 * @interface IPropsSelectMenu
 * @description The properties for the input select menu component.
 * @props `closeOnClickedOutside` `true` If set, the dropdown of the select-menu will automatically closed on an outside click
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `disabled` `undefined` Defines whether the input select-menu is disabled
 * @props `error` `undefined` Defines whether the input select-menu has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input select-menu
 * @props `max` `3` Sets the maximum selectable number
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `multiple` `true` If set, multiple selections are allowed
 * @props `name` `undefined` Sets the name attribute
 * @props `placeholder` `Select options...` Sets the placeholder
 * @props `required` `undefined` Defines whether the input select-menu is required
 * @props `searchPlaceholder` `Search...` Sets the search input placeholder
 * @props `searchable` `false` Defines whether the select menu is searchable
 * @props `selectedPlaceholder` `selected` Sets the selected placeholder
 * @props `size` `ESizes.DEFAULT` Sets the size of the input select-menu
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input select-menu should show a warning
 * @example
 * ```vue
 * <SelectMenu
 *   v-model="selectMenuRef"
 *   v-bind="args"
 * />
 *
 * const selectMenuRef = ref<{ label: string; value: string } | null>(null); // initial value
 * ```
 */
export interface IPropsSelectMenu {
    closeOnClickedOutside?: boolean
    corners?: ECorners.NONE | ECorners.DEFAULT | ECorners.LARGE_ROUNDED
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    max?: number
    modelValue?: ISelectItem[]
    multiple?: boolean
    name?: string
    placeholder?: string
    required?: boolean
    searchPlaceholder?: string
    searchable?: boolean
    selectedPlaceholder?: string
    size?: ESizes.DEFAULT | ESizes.SMALL
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
    localSearch?: boolean
    autofocus?: boolean
    clearSearchOnClose?: boolean
}
