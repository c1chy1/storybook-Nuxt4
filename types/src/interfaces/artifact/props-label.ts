/**
 * @internal
 * @interface IPropsLabel
 * @description Defines properties for the label component.
 * @props `id` `undefined` Sets the id of an label
 * @props `label` `undefined` Sets the label of an label
 * @props `required` `false` Sets whether the label is required
 * @props `disabled` `false` Sets the disabled state of an label
 */

export interface IPropsLabel {
    id?: string
    label?: string
    required?: boolean
    disabled?: boolean
    tooltip?: string
    error?: boolean
    warning?: boolean
}
