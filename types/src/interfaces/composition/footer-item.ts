import type {IPropsNavItem} from '../../'

/**
 * @interface IFooterItem
 * @extends IPropsNavItem
 * @see IPropsNavItem
 * @description Defines properties for the footer item component.
 * @props `highlight` `false` Defines if the item is highlighted
 */
export interface IFooterItem extends Partial<IPropsNavItem> {
    highlight?: boolean
}
