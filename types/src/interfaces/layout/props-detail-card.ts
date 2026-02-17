import type {EDetailCards, ESizes, IDetailCardItem, IPropsBadge} from '../../'

/**
 * @interface IPropsDetailCard
 * @description The properties for the detail card component.
 * @props `badge` `undefined` Defines the badge properties
 * @props `items` `undefined` Defines the items to be displayed within the detail card
 * @props `size` `ESizes.DEFAULT` Sets the size of the detail card
 * @props `title` `undefined` Sets the title of the detail card
 * @props `type` `EDetailCards.DETAIL` Sets the type of the detail card
 */
export interface IPropsDetailCard {
    badge?: IPropsBadge
    items?: IDetailCardItem[]
    size?: ESizes.DEFAULT | ESizes.SMALL
    title?: string
    type?: EDetailCards
}
