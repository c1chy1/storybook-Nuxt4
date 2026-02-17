import type {IMedia, IPropsButton} from '../../'

/**
 * @interface IDetailCardItem
 * @description Defines structure of a detail card item.
 * @props `buttons` `undefined` Sets the buttons of the detail card item
 * @props `description` `undefined` Sets the description of the detail card item
 * @props `icon` `undefined` Sets the icon of the detail card item
 * @props `subTitle` `undefined` Sets the subtitle of the detail card item
 * @props `title` `undefined` Sets the title of the detail card item
 */
export interface IDetailCardItem {
    buttons?: IPropsButton[]
    description?: string
    icon?: IMedia
    subTitle?: string
    title?: string
}
