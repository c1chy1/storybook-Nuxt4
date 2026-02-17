/**
 * @interface IPropsTable
 * @description The properties for the table component.
 * @props `items` `undefined` Defines the items for the table component
 * @props `striped` `undefined` Defines whether the table is striped
 */
export interface IPropsTable {
    items?: ITableItem[]
    striped?: boolean
}

/**
 * @interface ITableItem
 * @description Defines properties of a table item.
 * @props `key` `undefined` Holds the table header information as the key and the content as the value: {name: 'John Doe'}
 */
interface ITableItem {
    [tableHeader: string]: string
}
