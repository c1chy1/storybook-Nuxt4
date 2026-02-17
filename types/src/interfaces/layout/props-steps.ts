import type {EDirections, EStatus, ESteps} from '../../'

/**
 * @interface IPropsSteps
 * @description The properties for the steps component.
 * @props `direction` `EDirections.VERTICAL` Defines the direction of the steps component
 * @props `items` `undefined` Defines the items for the steps component
 * @props `styles` `ESteps.DEFAULT` Defines the styles for the steps component
 */
export interface IPropsSteps {
    direction?: EDirections
    items?: IStep[]
    styles?: ESteps
}

/**
 * @interface IStep
 * @description Defines properties of a step.
 * @props `disabled` `undefined` Sets the disabled state of the step
 * @props `id` `undefined` Unique id of the step
 * @props `status` `undefined` Sets the current status of the step
 * @props `title` `undefined` Sets the title of the step
 * @props `tooltip` `undefined` Sets the tooltip of the step
 */
export interface IStep {
    disabled?: boolean
    id?: string
    status?: EStatus
    title: string
    tooltip?: string
}
