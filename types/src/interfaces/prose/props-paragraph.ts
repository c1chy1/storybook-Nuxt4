import type {EParagraphs} from '../../'

/**
 * @interface IPropsParagraph
 * @description The properties for the paragraph component.
 * @props `classification` `EParagraphs.BASIC` Defines which HTML class tag the component should be rendered in
 * @props `title` `undefined` The title of the paragraph
 */
export interface IPropsParagraph {
    classification?: EParagraphs
    title?: string
}
