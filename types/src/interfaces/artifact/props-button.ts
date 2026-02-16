import type {EButtons, ECorners, EPositions, ESizes, IMedia} from '../../'

/**
 * @interface IPropsButton
 * @description Defines properties for the button component.
 * @props `block` `false` Defines whether the button should expand over its container
 * @props `corners` `ECorners.DEFAULT` Sets the edges and border radius
 * @props `customTextStyle` `undefined` Allows custom text button styles
 * @props `click` `undefined` Function to call when the button is clicked
 * @props `disabled` `undefined` Defines whether the button should be disabled
 * @props `icon` `undefined` Sets an icon to be used within the button
 * @props `iconPosition` `undefined` Sets the icon position
 * @props `id` `undefined` Sets the id of the button
 * @props `label` `undefined` Sets the label of the button
 * @props `outline` `undefined` Defines whether the button should be outlined
 * @props `size` `ESizes.DEFAULT` Sets the size of the button
 * @props `type` `EButtons.PRIMARY` Sets the type of the button
 */
export interface IPropsButton {
    block?: boolean
    click?: (...args: any[]) => void
    corners?: ECorners.DEFAULT | ECorners.NONE | ECorners.LARGE_ROUNDED | ECorners.MID_ROUNDED
    customTextStyle?: string
    disabled?: boolean
    icon?: IMedia
    iconPosition?: EPositions.LEFT | EPositions.RIGHT | EPositions.NONE
    id?: string
    label?: string
    outline?: boolean
    size?: ESizes.DEFAULT | ESizes.SMALL | ESizes.BIG
    type?: EButtons
}
