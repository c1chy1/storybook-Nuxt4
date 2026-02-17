import type {ELinks, EPopovers, IMedia, IPropsDropdown} from '../../'

/**
 * @interface IPropsLink
 * @description The properties for the link component.
 * @props `dropdown` `undefined` Defines the dropdown properties for the link
 * @props `highlight` `undefined` Defines if the link should be highlighted
 * @props `label` `undefined` Sets the label of the link
 * @props `icon` `undefined` Sets the media of the link
 * @props `onClick` `undefined` Defines the click event for the link
 * @props `path` `undefined` Sets the path of the link
 * @props `popoverType` `undefined` Defines the popover type for the link
 * @props `type` `undefined` Defines the type of link
 * @props `url` `undefined` Sets the url of the link
 */
export interface IPropsLink {
    dropdown?: IPropsDropdown
    highlight?: boolean
    label?: string
    icon?: IMedia
    onClick?: () => void
    path?: string
    popoverType?: EPopovers
    type?: ELinks
    url?: string
}
