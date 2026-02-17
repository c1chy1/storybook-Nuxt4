import type {EColors, IMedia} from '../../'

/**
 * @interface IPropsCount
 * @description The properties for the count component.
 * @props `count` `undefined` Sets the current count
 * @props `icon` `undefined` Sets the icon of the count component
 * @props `title` `undefined` Sets the title of the count component
 * @props `type` `EColors.PRIMARY` Sets the type (color theming) of the count component
 */
export interface IPropsCount {
    count?: string
    icon?: IMedia
    title?: string
    type?: EColors
}
