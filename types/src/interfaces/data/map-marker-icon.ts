/**
 * @interface IMapMarkerIcon
 * @description Defines the structure of a map marker icon.
 * @props `backgroundColor` `undefined` Background color of the icon
 * @props `color` `undefined` (Text-) Color of the element inside the icon
 * @props `height` `undefined` Height of the icon
 * @props `opacity` `undefined` Opacity of the icon
 * @props `outlineColor` `undefined` Outline color of the icon
 * @props `source` `undefined` Source of the icon
 * @props `title` `undefined` Title of the icon
 * @props `width` `undefined` Width of the icon
 */
export interface IMapMarkerIcon {
    backgroundColor?: string
    color?: string
    height?: number
    opacity?: number
    outlineColor?: string
    source?: string
    title?: string
    width?: number
}
