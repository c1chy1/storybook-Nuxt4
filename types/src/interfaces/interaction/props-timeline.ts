import type {IStaggering} from './staggering'
import type {ITimeline} from './timeline'
import type {IUnitDropdownItem} from './unit-dropdown-item'

/**
 * @interface IPropsTimeline
 * @description The properties for the timeline component.
 * @props `allowZoom` `true` Toggles the zoom functionality of the timelines
 * @props `hideSlider` `undefined` Toggles the visibility of the slider
 * @props `staggering` `undefined` The staggering properties for the timeline
 * @props `timelines` `undefined` The timeline items for the timeline
 * @props `unit` `undefined` Sets the current unit
 * @props `unitDropdownItems` `undefined` Defines the items for the unit dropdown
 * @props `unitLabel` `undefined` Defines the label for the unit dropdown
 * @props `zoomLevel` `1` Adjusts the zoom level of the timelines (compress or expand)
 */
export interface IPropsTimeline {
    allowZoom?: boolean
    hideSlider?: boolean
    staggering?: IStaggering
    timelines?: ITimeline[]
    unit?: string
    unitDropdownItems?: IUnitDropdownItem[]
    unitLabel?: string
    zoomLevel?: number
}
