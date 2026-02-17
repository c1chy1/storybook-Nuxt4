import type {EPopovers} from '../../'

/**
 * @interface IPropsPopover
 * @description The properties for the popover component.
 * @props `open` `undefined` Defines whether the popover is open
 * @props `type` `EPopovers.NONE` Defines the type of popover
 */
export interface IPropsPopover {
    open?: boolean
    type?: EPopovers
}
