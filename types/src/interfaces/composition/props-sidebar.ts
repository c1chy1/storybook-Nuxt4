import type {IMedia, IPropsNavItem} from '../../'

/**
 * @interface IPropsSidebar
 * @description Defines properties for the sidebar component.
 * @props `collapsed` `false` Defines if the sidebar is collapsed
 * @props `footnote` `undefined` Sets the sidebar footnote
 * @props `items` `undefined` Sets the sidebar items
 * @props `media` `undefined` Sets the sidebar image or icon
 */
export interface IPropsSidebar {
    collapsed?: boolean
    footnote?: string
    items?: IPropsNavItem[]
    media?: IMedia
}
