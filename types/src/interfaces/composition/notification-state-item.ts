/**
 * @interface INotificationStateItem
 * @description Defines properties for a notification state item.
 * @props `content` `undefined` Defines the content of the notification state item
 * @props `id` `undefined` Defines the id of the notification state item
 * @props `title` `undefined` Defines the title of the notification state item
 * @props `type` `undefined` Defines the type of the notification state item
 */
export interface INotificationStateItem {
    id?: string
    title?: string | undefined
    descriptions?: string[]
    type?: 'error' | 'warning' | 'info' | 'success'
}
