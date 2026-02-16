import type {EActions, EButtons, EColors, IMedia} from '../../'

/**
 * @internal
 * @interface IPropsAction
 * @description Defines properties for the action component.
 * @props `disabled` `undefined` Sets the disabled state of an action
 * @props `icon` `undefined` Sets the icon of an action
 * @props `label` `undefined` Sets the label of an action
 * @props `theme` `undefined` Sets the color theming of an action
 * @props `type` `undefined` Sets the type of action
 */
export interface IPropsAction {
    disabled?: boolean
    icon?: IMedia
    label?: string
    theme?: EColors | string
    type?: EActions | EColors | EButtons
}
