import type {INotificationStateItem} from './notification-state-item'

/**
 * @interface IPropsNotificationState
 * @description Defines properties for the notification state component.
 * @props `notifications` `undefined` Sets the notifications of the notification state
 */
export interface IPropsNotificationState {
    notifications: INotificationStateItem[]
}
