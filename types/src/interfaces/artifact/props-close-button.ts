import type {EColors} from '../../'

/**
 * @interface IPropsCloseButton
 * @description The properties for the close button component.
 * @props `disabled` `undefined` Defines whether the close button should be disabled
 * @props `onClick` `undefined` Function to call when the close button is clicked
 * @props `theme` `EColors.DARK` Sets the theme of the close button
 */
export interface IPropsCloseButton {
    disabled?: boolean
    onClick?: () => void
    theme?: EColors.LIGHT | EColors.DARK
}
