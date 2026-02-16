import type {EColors, EPositions, ESizes, IMedia, IPropsCloseButton} from '../../'

/**
 * @interface IPropsBadge
 * @description Defines properties for the badge component.
 * @props `closeButton` `undefined` Sets the close button of the badge
 * @props `icon` `undefined` Sets the icon of the badge
 * @props `iconPosition` `undefined` Sets the position of the icon
 * @props `label` `undefined` Sets the label of the badge
 * @props `pill` `undefined` Defines whether the badge should be pill-shaped
 * @props `size` `ESizes.DEFAULT` Sets the size of the badge
 * @props `type` `EColors.PRIMARY` Sets the type of the badge
 */
export interface IPropsBadge {
    closeButton?: IPropsCloseButton
    icon?: IMedia
    iconPosition?: EPositions.LEFT | EPositions.RIGHT
    label?: string
    pill?: boolean
    size?:
        | ESizes.DEFAULT
        | ESizes.SMALL
    type?: EColors
}
