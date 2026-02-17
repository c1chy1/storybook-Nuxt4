/**
 * @interface IPropsMetaHero
 * @description The properties for the meta hero component.
 * @props `items` `[]` Array of meta hero items to display
 * @props `max` `3` Maximum number of items visible at once, controls grid columns
 * @props `scrollable` `true` Whether the component should be horizontally scrollable
 */
export interface IPropsMetaHero {
    items?: IMetaHeroItem[]
    max?: number
    scrollable?: boolean
}

/**
 * @interface IMetaHeroItem
 * @description Defines properties for a meta hero item.
 * @props `description` `undefined` Description text displayed below the title
 * @props `icon` `undefined` Icon component or icon name displayed on the first line (right side)
 * @props `id` `undefined` Unique identifier for the item
 * @props `title` `undefined` Title text displayed on the first line (left side)
 */
export interface IMetaHeroItem {
    description?: string
    icon?: string
    id?: string | number
    title?: string
}
