import type {EColors, IMedia} from '../../'

/**
 * @interface IAccordionItem
 * @description Defines structure of an accordion item.
 * @props `description` `undefined` Sets the content of the accordion item
 * @props `icon` `undefined` Sets the prepend icon of the accordion item
 * @props `id` `undefined` Unique id of the accordion item
 * @props `open` `undefined` Defines if the accordion item is open on initial render
 * @props `title` `undefined` Sets the title of the accordion item
 * @props `type` `undefined` Sets a colored state for an information display
 */
export interface IAccordionItem {
    description?: string
    icon?: IMedia
    id?: string
    open?: boolean
    title?: string
    type?: EColors
}
