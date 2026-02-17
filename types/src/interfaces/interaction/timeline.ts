import type {IMedia} from '../base'
import type {IDataPoint} from './data-point'
import type {IPropsDropdown} from './props-dropdown'

/**
 * @interface ITimeline
 * @description The properties for a timeline item.
 * @props `color` `undefined` Defines the theming of the timeline
 * @props `contextActions` `undefined` Defines the context actions for the timeline.
 * If not set, no context menu will be shown
 * @props `dataPoints` `undefined` Defines the data points for the timeline
 * @props `disabled` `false` Toggles the disabled state of the timeline
 * @props `icon` `undefined` Defines the icon for the timeline
 * @props `id` `undefined` Sets the id for the timeline
 * @props `title` `undefined` Sets the title for the timeline
 */
export interface ITimeline {
    color?: string
    contextActions?: IPropsDropdown
    dataPoints?: IDataPoint[]
    disabled?: boolean
    icon?: IMedia
    id?: string
    title?: string
}
