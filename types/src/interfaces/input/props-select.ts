import type {ECorners, EDirections, ESizes, ISelectItem} from '../../'

/**
 * @interface IPropsSelect
 * @description The properties for the input select component.
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input select
 * @props `disabled` `undefined` Defines whether the input select is disabled
 * @props `error` `undefined` Defines whether the input select has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input select
 * @props `modelValue` `ISelectItem[]` The model value to be used with v-model, also defines the initial value
 * @props `name` `undefined` Sets the name attribute
 * @props `required` `undefined` Defines whether the input select is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input select
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input select should show a warning
 * @example
 * ```vue
 * <Select
 *   v-model="selectRef"
 *   v-bind="args"
 * />
 *
 * const selectRef = ref<ISelectItem[]>([{...}]); // initial select value
 * ```
 */
export interface IPropsSelect {
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    modelValue?: ISelectItem[]
    multiple?: boolean
    name?: string
    required?: boolean
    size?: ESizes
    tooltip?: string
    warning?: boolean
}
