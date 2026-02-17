import type {INavigation} from '../../'

/**
 * @interface IPropsPagination
 * @description Defines properties for the pagination component.
 * @props `currentPage` `1` Defines the current page number
 * @props `items` `undefined` Defines the URLs associated with the page numbers indicated by the array indices
 */
export interface IPropsPagination {
    currentPage?: number
    items?: INavigation[]
}
