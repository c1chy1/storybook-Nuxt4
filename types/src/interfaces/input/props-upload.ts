import type {EDirections, IMedia} from '../../'

/**
 * @interface IPropsUpload
 * @description Defines properties for the input uploader component.
 * @props `accept` `undefined` Sets the file types that are accepted (mime types or file extensions)
 * @props `description` `undefined` Adds a description
 * @props `direction` `EDirections.VERTICAL` Aligns the input uploader and file list preview
 * @props `disabled` `undefined` Disables the input uploader and file list preview
 * @props `dragDrop` `true` Enables drag and drop functionality
 * @props `error` `undefined` Colorizes the input uploader border to red
 * @props `icon` `undefined` Adds an icon
 * @props `id` `input-upload-${generateId()}` Sets the unique id of the input uploader
 * @props `label` `undefined` Adds a label
 * @props `max` `undefined` The maximum number of files that can be uploaded
 * @props `maxFileSize` `undefined` Defines the maximum file size in bytes
 * @props `modelValue` `undefined` Accepts a predefined list of files
 * @props `name` `undefined` Sets the name attribute of the input uploader
 * @props `required` `undefined` Marks the input uploader as required
 * @props `title` `undefined` Adds a title
 * @props `tooltip` `undefined` Adds a tooltip
 * @props `value` `undefined` Accepts a predefined list of files
 * @props `warning` `undefined` Colorizes the input uploader border to yellow
 * ```vue
 * <Upload
 *   v-model="fileList"
 *   v-bind="args"
 * />
 *
 * const fileList = ref(new Map<string, File>());
 * fileList.value.set('file_1', new File(['file_1'], 'file_1.txt'));
 * ```
 */
export interface IPropsUpload {
    accept?: string
    description?: string
    direction?: EDirections
    disabled?: boolean
    dragDrop?: boolean
    error?: boolean
    icon?: IMedia
    id?: string
    label?: string
    max?: number
    maxFileSize?: number
    modelValue?: Map<string, File>
    name?: string
    required?: boolean
    title?: string
    tooltip?: string
    value?: Map<string, File>
    warning?: boolean
}
