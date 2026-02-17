import type {EDirections, EDividers, IMedia} from '../../'

/**
 * @interface IPropsDivider
 * @description The properties for the divider component.
 * @props `direction` `EDirections.HORIZONTAL` Sets the direction of the divider
 * @props `icon` `undefined` The icon to be used in combination with the button
 * @props `label` `undefined` Sets the label of the divider
 * @props `styles` `undefined` Applies custom styling for the divider
 * @props `type` `EDividers.DEFAULT` Defines the type of the divider
 */
export interface IPropsDivider {
    direction?: EDirections
    icon?: IMedia
    label?: string
    styles?: string
    type?: EDividers
}
