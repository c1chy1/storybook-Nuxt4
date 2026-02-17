import type {ECorners, EDirections, EInputVariants, EPopovers, ESizes, IMedia} from '../../'

/**
 * @interface IPropsSearch
 * @description Defines properties for the search component.
 * Retrieve the value of the search either via `v-model="refVar"`, `@update:value` or `@keydown:search`.
 * @props `autofocus` `undefined` Sets the autofocus on the input field
 * @props `clearOnFocusOut` `undefined` Clears the input field on focus out
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `defaultSearchDropdown` `undefined` Sets the default dropdown visibility with a slot
 * @props `direction` `undefined` Sets the direction of the input search
 * @props `disabled` `undefined` Defines whether the input search is disabled
 * @props `dropdownAlwaysVisible` `undefined` Defines whether the dropdown is always visible
 * @props `error` `undefined` Defines whether the input search has an error
 * @props `icon` `undefined` Sets the icon of the input search
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input search
 * @props `max` `undefined` Sets the maximum length of the input search
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `outline` `undefined` Defines whether the input search is outlined
 * @props `placeholder` `undefined` Sets the placeholder of the input search
 * @props `popover` `EPopovers.NONE` Sets the popover type
 * @props `required` `undefined` Defines whether the input search is required
 * @props `showResults` `false` Shows the results of the search
 * @props `size` `undefined` Sets the size of the input search
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input search has a warning
 */
export interface IPropsSearch {
    autofocus?: boolean
    clearOnFocusOut?: boolean
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    defaultSearchDropdown?: boolean
    direction?: EDirections
    disabled?: boolean
    dropdownAlwaysVisible?: boolean
    error?: boolean
    icon?: IMedia
    id?: string
    label?: string
    max?: number | string
    modelValue?: string
    name?: string
    outline?: boolean
    placeholder?: string
    popover?: EPopovers
    required?: boolean
    showResults?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
    variant?: EInputVariants.DEFAULT | EInputVariants.PRIMARY
}
