import type {EColors, EPositions, IMedia} from '../../'

/**
 * @interface IPropsMessage
 * @description Defines properties for the message component.
 * @props `active` `undefined` Toggles the active state of the message
 * @props `attachments` `undefined` Array of media attachments
 * @props `description` `undefined` Sets a description for the message
 * @props `disabled` `undefined` Toggles the disabled state of the message
 * @props `duration` `undefined` Sets a duration timer for the message to be shown (in ms)
 * @props `height` `75` Sets the height of the message
 * @props `hover` `undefined` Toggle hover effect on the message component
 * @props `icon` `undefined` Icon media for the message
 * @props `id` `undefined` Unique identifier for the message
 * @props `indicator` `undefined` Indicator icon for the message
 * @props `opacity` `undefined` Sets the opacity of the message
 * @props `position` `undefined` Positioning of the message within the viewport
 * @props `preview` `undefined` Toggles image previews of attachments
 * @props `timestamp` `undefined` Sets a timestamp for the message
 * @props `timestampPosition` `inline` Positioning of the timestamp within the message or underneath
 * @props `title` `undefined` Title text for the message
 * @props `type` `EColors.DEFAULT` Sets a colored state for the message
 * @props `width` `undefined` Sets the width of the message
 */
export interface IPropsMessage {
    active?: boolean
    attachments?: IMedia[]
    description?: string
    disabled?: boolean
    duration?: number
    height?: number
    hover?: boolean
    icon?: IMedia
    id?: string
    indicator?: IMedia
    opacity?: number
    position?: EPositions
    preview?: boolean
    timestamp?: string | Date
    timestampPosition?: 'inline' | 'bottom' | 'right'
    title?: string
    type?: EColors
    width?: number
}
