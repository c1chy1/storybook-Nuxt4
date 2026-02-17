import type {IPropsBadge} from '../../'

/**
 * @interface IPropsProgress
 * @description The properties for the progress component.
 * @props `label` `undefined` Defines the label for the progress component
 * @props `badge` `undefined` Defines the badge for the progress component
 * @props `value` `undefined` Defines the value for the progress component
 */
export interface IPropsProgress {
    badge?: IPropsBadge
    label?: string
    value?: number
}
