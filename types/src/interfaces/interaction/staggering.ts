/**
 * @interface IStaggering
 * @description The properties for the staggering of the timeline component.
 * @props `sections` `undefined` Defines the sections for staggering
 * @props `step` `undefined` Defines the sensitivity of the slider.
 * The lower the value, the finer the detection of a data point.
 * If the value is set higher, the detection will be triggered much further (even if it is not directly on the data point).
 */
export interface IStaggering {
    sections: number[]
    step: number
}
