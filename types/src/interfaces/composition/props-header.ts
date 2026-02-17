import type {ENavigations, EPopovers, IBar, IMedia, IPropsAvatar, IPropsDropdown, IPropsNavItem} from '../../'

/**
 * @interface IPropsHeader
 * @description Defines properties for the header component.
 * @props `avatar` `undefined` Defines the avatar properties
 * @props `bar` `undefined` Defines the header bar properties
 * @props `dropdown` `undefined` Defines the dropdown properties
 * @props `items` `undefined` Defines the navigation items
 * @props `logo` `undefined` Sets the logo of the header
 * @props `mobile` `undefined` Defines if the header is mobile
 * @props `popoverType` `EPopovers.NONE` Defines the popover type
 * @props `type` `ENavigations.DEFAULT` Defines the type of navigation
 */
export interface IPropsHeader {
    avatar?: IPropsAvatar
    bar?: IBar
    dropdown?: IPropsDropdown
    items?: IPropsNavItem[]
    logo?: IMedia
    mobile?: boolean
    popoverType?: EPopovers
    type?: ENavigations
}
