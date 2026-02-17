import type {IMedia, IPropsButton} from '../../'

/**
 * @interface IPropsState
 * @description The properties for the state component.
 * @props `button` `undefined` Defines the button for the state component
 * @props `description` `undefined` Defines the description for the state component
 * @props `descriptionStyle` `undefined` Defines the style for the description
 * @props `icon` `undefined` Defines the icon for the state component
 * @props `subTitle` `undefined` Defines the subtitle for the state component
 * @props `subTitleStyle` `undefined` Defines the style for the subtitle
 * @props `title` `undefined` Defines the title for the state component
 * @props `titleStyle` `undefined` Defines the style for the title
 */
export interface IPropsState {
    button?: IPropsButton
    description?: string
    descriptionStyle?: string
    icon?: IMedia
    subTitle?: string
    subTitleStyle?: string
    title?: string
    titleStyle?: string
}
