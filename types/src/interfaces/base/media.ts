import type {EFittings, EMedia, EPositions} from '../../'

/**
 * @interface IMedia
 * @description Defines the structure of an image or icon element.
 * @props `alt` `undefined` Sets the alternative text of an element
 * @props `blob` `undefined` Sets the blob data of the media element
 * @props 'color' `undefined` Sets the color of the media element
 * @props `customStyle` `undefined` Sets the custom style of the media element
 * @props `disabled` `undefined` Disables the media element
 * @props `fit` `undefined` Sets the image fitting in the container
 * @props `height` `undefined` Sets the height of the media element
 * @props `id` `undefined` Sets the unique id
 * @props `opacity` `undefined` Sets the opacity of the media element
 * @props `path` `undefined` Sets the path of the media element
 * @props `position` `undefined` Sets the position of the media element
 * @props `rotate` `undefined` Animates the element by rotating it clockwise around its center
 * @props `source` `undefined` Holds the source path to an image, icon or specifies an inline svg-template
 * @props `subTitle` `undefined` Sets the subtitle of the media element
 * @props `title` `undefined` Sets the title of the media element
 * @props `tooltip` `undefined` Sets the tooltip of the media element
 * @props `type` `undefined` Defines the type represented by a MIME type
 * @props `url` `undefined` Sets the url of the media element
 * @props `width` `undefined` Sets the width of the media element
 */
export interface IMedia {
    alt?: string
    blob?: Blob | string
    color?: string
    customStyle?: string
    disabled?: boolean
    fit?: EFittings
    height?: number
    id?: string
    opacity?: number
    path?: string
    position?: EPositions
    rotate?: boolean
    source?: string
    subTitle?: string
    title?: string
    tooltip?: string
    type?: EMedia
    url?: string
    width?: number
}
