/**
 * @interface IPropsIcon
 * @description The properties for the input text component.
 * @props `alt` `undefined` Sets the alternative text of an element
 * @props `customStyle` `undefined` Accepts custom styles
 * @props `rotate` `undefined` Animates the element by rotating it clockwise around its center
 * @props `source` `undefined` Holds the source path to an image, icon or specifies an inline svg-template
 * @props `title` `undefined` Sets the title corresponding to the iconify icon name
 * ```typescript
 * // For material icons see https://icon-sets.iconify.design/mdi/
 * ```
 */
export interface IPropsIcon {
    alt?: string
    customStyle?: string
    rotate?: boolean
    source?: string
    title?: string
}
