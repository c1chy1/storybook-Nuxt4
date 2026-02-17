import type {ECorners, EDirections, ESizes, IPropsSearch, IPropsState, ISelectItem} from '../../'

/**
 * @interface IPropsMultiSelect
 * @description The properties for the input multiselect component.
 * Retrieve the value of the search either via `v-model:searchValue="refVar"` or `@keydown:search`. Get the selected values via `v-model="refVar"` or `@update:value`.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input multiselect
 * @props `disabled` `undefined` Defines whether the input multiselect is disabled
 * @props `error` `undefined` Defines whether the input multiselect has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input multiselect
 * @props `maxSelectable` `undefined` Defines the max number of items that can be selected
 * @props `maxVisible` `undefined` Defines the max number of items to be shown
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `noSearchResults` `undefined` Shows an optional State or a freely customizable slot for when there are no search results
 * @props `noSearchResultsError` `undefined` Shows a default State when there are no search results
 * @props `pills` `undefined` Displays selected options as pills
 * @props `placeholder` `Select options` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input multiselect is required
 * @props `searchProps` `{...}` Sets the local filtering of the options
 * @props `searchValue` `undefined` The value of the search input, this is used internally and should be used with `v-model:searchValue`
 * @props `selectedString` `undefined` Sets the 'x selected' string
 * @props `size` `ESizes.DEFAULT` Sets the size of the input multiselect
 * @props `staticOptions` `true` Defines whether the options are static
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input multiselect should show a warning
 */
export interface IPropsMultiSelect {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    maxSelectable?: number
    maxVisible?: number
    modelValue?: ISelectItem[]
    name?: string
    noSearchResults?: 'error' | 'slot'
    noSearchResultsError?: IPropsState
    pills?: boolean
    placeholder?: string
    required?: boolean
    searchProps?: IPropsSearch
    searchValue?: string
    selectedString?: string
    size?: ESizes
    staticOptions?: boolean
    tooltip?: string
    warning?: boolean
}
