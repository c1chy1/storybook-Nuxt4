import type {IMedia} from '../../'

/**
 * @interface INavigation
 * @description Defines the structure of a navigation item.
 * @props `description` `undefined` Sets the description of the navigation item
 * @props `disabled` `undefined` Defines if the navigation item is disabled
 * @props `id` `undefined` Sets the unique id of the navigation item
 * @props `media` `undefined` Sets the media of an element
 * @props `path` `undefined` Provided path of the navigation item (i.e. for redirection purposes without reload)
 * @props `title` `undefined` Sets the title of the navigation item
 * @props `url` `undefined` Provided url of the navigation item (for redirection purposes)
 */
export interface INavigation {
    description?: string
    disabled?: boolean
    id?: string
    media?: IMedia
    path?: string
    title?: string
    url?: string
}
