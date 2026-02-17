import type {IMedia} from '../base'

/**
 * @interface IDataPoint
 * @description The properties for a data point.
 * @props `icon` `undefined` Defines the icon for the data point
 * @props `id` `undefined` Sets the id for the data point
 * @props `label` `undefined` Sets the label for the data point
 * @props `type` `default` Defines the type of the data point
 * @props `value` `undefined` Sets the value for the data point
 */
export interface IDataPoint {
    icon?: IMedia
    id?: string
    label?: string
    type?: 'default' | 'event'
    value?: number
}
