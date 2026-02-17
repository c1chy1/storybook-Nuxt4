import type {EActions, EColors, IPropsButton} from '../../'

/**
 * @interface IPropsNotification
 * @description Defines properties for the notification component.
 * @props `action` `EActions.NONE` Defines the action for the notification
 * @props `buttons` `undefined` Defines properties of action buttons (only if EActions.BUTTON)
 * @props `descriptions` `undefined` Sets the content of the notification. Each item will be a bullet point
 * @props `icon` `true` Defines whether the notification has an icon. Icon will be set by the notification state
 * @props `id` `undefined` Unique id of the notification
 * @props `inverted` `false` Inverts the notification colors
 * @props `title` `undefined` Sets the title of the notification
 * @props `type` `EColors.INFO` Sets a colored state for the notification
 */
export interface IPropsNotification {
    action?: EActions.BUTTON | EActions.CLOSE | EActions.LABELED | EActions.NONE
    buttons?: IPropsButton[]
    descriptions?: Array<string>
    icon?: boolean
    id?: string
    inverted?: boolean
    title?: string
    type?: EColors
}
