import type {ECharts} from '../../'

/**
 * @interface IPropsChart
 * @description The properties for the chart component. Uses chart.js as dependency.
 * @props `data` `undefined` Defines data to be rendered within the chart
 * @props `options` `undefined` Defines options to be set for the chart
 * @props `type` `undefined` Defines the chart type
 */
export interface IPropsChart {
    /**
     * @example
     * data: {
     *  datasets: [{label: 'Tours', data: [250, 1500, 2000, 4500, 3000]}],
     *  labels: ['2020', '2021', '2022', '2023', '2024']
     * }
     */
    data?: unknown
    options?: unknown
    type?: ECharts
}
