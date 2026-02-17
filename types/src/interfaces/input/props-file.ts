import type {ECorners, EDirections, ESizes} from '../../'

/**
 * @interface IPropsFile
 * @description The properties for the input file component.
 * @props `accept` `undefined` Defines which file types are accepted (e.g. '.jpg,.png,application/pdf')
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `direction` `EDirections.VERTICAL` Sets the direction of the input file
 * @props `disabled` `undefined` Defines whether the input file is disabled
 * @props `error` `undefined` Defines whether the input file has an error
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the input file
 * @props `modelValue` `undefined` The model value to be used with v-model, also defines the initial value
 * @props `multiple` `undefined` Defines whether multiple files can be uploaded
 * @props `name` `undefined` Sets the name attribute
 * @props `placeholder` `Select File` Sets the placeholder text
 * @props `required` `undefined` Defines whether the input file is required
 * @props `size` `ESizes.DEFAULT` Sets the size of the input file
 * @props `tooltip` `undefined` Sets the tooltip text
 * @props `warning` `undefined` Defines whether the input file should show a warning
 * ```vue
 * <Upload
 *   v-model="file"
 *   v-bind="args"
 * />
 *
 * const file = ref<File | undefined>(); // initial file
 * ```
 */
export interface IPropsFile {
    accept?: string
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED
    direction?: EDirections
    disabled?: boolean
    error?: boolean
    id?: string
    label?: string
    modelValue?: File
    multiple?: boolean
    name?: string
    placeholder?: string
    required?: boolean
    size?: ESizes.SMALL | ESizes.DEFAULT | ESizes.BIG
    tooltip?: string
    warning?: boolean
}
