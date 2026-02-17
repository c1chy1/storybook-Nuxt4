/**
 * @interface IPropsTab
 * @description The properties for the tabs component.
 * @props `items` `undefined` Defines the items for the tabs component
 */
export interface IPropsTab {
    items?: ITabItem[]
}

/**
 * @interface ITabItem
 * @description Defines properties of a tab item.
 * @props `description` `undefined` Sets the description of the tab item
 * @props `id` `undefined` Unique id of the tab item
 * @props `title` `undefined` Sets the title of the tab item
 */
export interface ITabItem {
    description?: string
    id?: string
    title?: string
}
