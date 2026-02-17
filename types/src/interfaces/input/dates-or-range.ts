/**
 * @interface IDateItem
 * @description Defines the properties for a date item.
 * @props `id` `undefined` Sets the unique id
 * @props `date` `undefined` Defines the value of the date
 * @props `disabled` `undefined` Sets the disabled state of the date
 * @props `indicator` `undefined` Defines whether the date has an indicator
 */
export interface IDateItem {
    id?: string
    date?: Date | string
    disabled?: boolean
    indicator?: boolean
}

/**
 * @interface IDates
 * @description Defines the properties for specific dates or date ranges.
 * @props `dates` `undefined` Sets specified date items
 * @props `id` `undefined` Sets the unique id
 */
export interface IDates {
    dates?: Array<IDateItem>
    id?: string
}

/**
 * @interface IDateRange
 * @description Defines the properties for a date range.
 * @props `endDate` `undefined` Sets the end date of the range
 * @props `id` `undefined` Sets the unique id
 * @props `startDate` `undefined` Sets the start date of the range
 */
export interface IDateRange {
    endDate?: Date | string
    id?: string
    startDate?: Date | string
}

export type IDatesOrRange = IDates | IDateRange
