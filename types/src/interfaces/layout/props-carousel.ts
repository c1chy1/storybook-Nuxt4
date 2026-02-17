import type {IMedia} from '../../'

/**
 * @interface IPropsCarousel
 * @description The properties for the carousel component.
 * @props `items` `undefined` Defines the items in the carousel
 */
export interface IPropsCarousel {
    items?: ICarouselItem[]
}

/**
 * @interface ICarouselItem
 * @description Defines structure of a carousel item.
 * @props `background` `undefined` Sets a background image or a background color of the carousel item
 * @props `subTitle` `undefined` Sets the subtitle of the carousel item
 * @props `title` `undefined` Sets the title of the carousel item
 */
export interface ICarouselItem {
    background?: IMedia
    subTitle?: string
    title?: string
}
