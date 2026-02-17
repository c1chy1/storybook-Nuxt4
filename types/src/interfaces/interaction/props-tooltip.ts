import type {ETooltipPositions, ETooltipThemes} from '../../enums'

/**
 * @interface IPropsTooltip
 * @description Properties for the Tooltip component
 * @props `text` - The text content to display in the tooltip
 * @props `position` - The position where the tooltip should appear relative to the trigger element
 * @props `theme` - The theme/style variant of the tooltip
 */
export interface IPropsTooltip {
    tooltip?: string
    position?: ETooltipPositions
    theme?: ETooltipThemes
}
