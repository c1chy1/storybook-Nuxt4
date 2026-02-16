import type {EAvatars, IMedia} from '../../'

/**
 * @interface IPropsAvatar
 * @description Defines properties for the avatar component.
 * @props `avatar` `undefined` Sets the avatar image and/or styling via `customStyle`
 * @props `initials` `undefined` Defines the initials of the avatar if no image is set
 * @props `title` `undefined` Sets the title of the avatar
 * @props `type` `EAvatars.INITIALS` Defines the type of the component
 */
export interface IPropsAvatar {
    avatar?: IMedia
    initials?: string
    title?: string
    type?: EAvatars
}
