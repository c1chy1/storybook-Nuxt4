/**
 * @interface IPropsContextMenu
 * @description Properties for the ContextMenu component
 * @props `component` - The component to be rendered in the context menu.
 * @props `componentProps` - The props to be passed to the component.
 * @props `forceClose` - Whether to force close the context menu.
 * @props `height` - The height of the context menu.
 * @props `width` - The width of the context menu.
 * @props `background` - The background color of the context menu.
 */
export interface IPropsContextMenu {
    component?: any
    componentProps?: any
    forceClose?: boolean
    height?: number
    width?: number
    background?: string
}
