import type {IPropsButton} from '../../'

/**
 * @interface IPropsHero
 * @description The properties for the hero component.
 * @props `background` `undefined` Sets the background of the hero (can be an image or an overlay color or both)
 * @props `button` `undefined` Defines the hero button
 * @props `subTitle` `undefined` Sets the subtitle of the hero
 * @props `title` `undefined` Sets the title of the hero
 */
export interface IPropsHero {
    background?: IHeroImage
    button?: IPropsButton
    subTitle?: string
    title?: string
}

/**
 * @interface IHeroImage
 * @description Defines properties for the hero image component.
 * @props `id` `undefined` Unique id of the hero image
 * @props `overlayColor` `undefined` Accepts a HEX color as the hero image (either as a fallback or as an actual overlay)
 * @props `source` `undefined` Sets the source of the hero image
 * @props `subTitle` `undefined` Sets the subtitle of the hero
 * @props `title` `undefined` Sets the title of the hero
 */
interface IHeroImage {
    id?: string
    overlayColor?: string
    source?: string
    subTitle?: string
    title?: string
}
