import type {EColors, IMedia} from '../../'

/**
 * @interface IPropsListItem
 * @description The properties for the list item component.
 * @props `buttons` `undefined` Defines the buttons for the list item
 * @props `color` `undefined` Defines a custom hex color for the list item. Will override the `type` color
 * @props `count` `undefined` Defines the count for the list item
 * @props `disabled` `undefined` Defines if the list item is disabled
 * @props `draggable` `undefined` Defines if the item is draggable within the list
 * @props `id` `undefined` Sets the unique id
 * @props `title` `undefined` Sets the title of the list item
 * @props `type` `EColors.DARK` Defines the type of the list item
 */
export interface IPropsListItem {
    buttons?: IListItemButton[]
    color?: string
    count?: number
    disabled?: boolean
    draggable?: boolean
    id?: string
    title?: string
    type?: EColors
}

/**
 * @interface IListItemButton
 * @description Defines properties for a list item button.
 * @props `disabled` `undefined` Sets the disabled state of the list item button
 * @props `icon` `undefined` Sets the icon of the list item button
 * @props `id` `undefined` Unique id of the list item button
 * @props `onClick` `undefined` Handles the click event of the list item button
 * @props `theme` `#AAAEB7` Accepts a HEX color to set the background color of the list item button
 * @props `tooltip` `undefined` Sets the tooltip of the list item button
 */
interface IListItemButton {
    disabled?: boolean
    icon?: IMedia
    id?: string
    onClick?: () => void
    theme?: string
    tooltip?: string
}
