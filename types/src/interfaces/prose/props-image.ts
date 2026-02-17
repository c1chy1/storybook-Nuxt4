import type {EFittings, EMedia} from '../../'

/**
 * @interface IPropsImage
 * @description Defines the properties of the image component.
 * @props `alt` `undefined` Sets the alt text of the image
 * @props `blob` `undefined` Sets the blob data of the image
 * @props `customStyle` `undefined` Sets the custom style of the image
 * ```typescript
 * // Example
 * customStyle: 'border: 1px solid red;'
 * ```
 * @props `download` `undefined` Downloads the image on click
 * @props `expanded` `undefined` If set, the image will be displayed in an expanded view
 * @props `fit` `undefined` Sets the image fitting in the container
 * @props `fullscreen` `undefined` If set, the fullscreen button will be displayed and borders will be drawn
 * @props `height` `undefined` Sets the height of the image
 * @props `id` `undefined` Sets the unique id
 * @props `label` `undefined` Sets the label of the image
 * @props `openInNewTab` `undefined` Opens the image in a new tab
 * @props `source` `undefined` Holds the source path to an image
 * @props `type` `undefined` Defines the type represented by a MIME type
 * @props `width` `undefined` Sets the width of the image
 */
export interface IPropsImage {
    alt?: string
    blob?: string | Blob
    customStyle?: string
    download?: boolean
    expanded?: boolean
    fit?: EFittings
    fullscreen?: boolean
    height?: string
    id?: string
    label?: string
    openInNewTab?: boolean
    source?: string
    type?: EMedia
    width?: string
}
