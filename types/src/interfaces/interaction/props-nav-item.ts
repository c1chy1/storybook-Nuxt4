import type {IMedia} from '../../'

/**
 * @interface IPropsNavItem
 * @description The properties for the navigation item component.
 * @props `active` `undefined` Determines whether the navigation item is currently active
 * @props `children` `undefined` Can call itself recursively and therefore has several child elements
 * @props `description` `undefined` The description of the navigation item
 * @props `disabled` `undefined` Determines whether the navigation item is disabled
 * @props `id` `undefined` Unique identifier for the navigation item
 * @props `level` `0` Initial navigation level (level: 0). For internal use only
 * @props `media` `undefined` Sets the media of an element
 * @props `opacity` `undefined` Sets the opacity of the navigation item
 * @props `path` `undefined` Provided path of the navigation item (i.e. for redirection purposes without reload)
 * @props `title` `undefined` The title of the navigation item
 * @props `url` `undefined` Provided url of the navigation item (for redirection purposes)
 */
export interface IPropsNavItem {
    active?: boolean
    children?: IPropsNavItem[]
    description?: string
    disabled?: boolean
    id?: string
    level?: number
    media?: IMedia
    opacity?: number
    path?: string
    title?: string
    url?: string
}
