import type {ESizes, IAccordionItem} from '../../'

/**
 * @interface IPropsAccordion
 * @description Defines properties for the Accordion component.
 * @props `items` `undefined` Defines items to be used in the accordion
 * @props `size` `ESizes.DEFAULT` Defines the size of the accordion
 * @props `toggle` `undefined` If set, only one item can be opened at a time
 */
export interface IPropsAccordion {
    items?: IAccordionItem[]
    size?: ESizes.DEFAULT | ESizes.SMALL
    toggle?: boolean
}
