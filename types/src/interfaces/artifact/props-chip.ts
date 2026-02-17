import type {EPositions} from '../../enums'

/**
 * @interface IPropsChip
 * @description Properties for the Chip component
 * @props `backgroundColor` - Background color of the chip
 * @props `color` - Text color of the chip
 * @props `customStyles` - Custom styles for the chip
 * @props `label` - Label text of the chip
 * @props `position` - Position of the chip
 * @props `show` - Whether the chip is visible
 * @props `size` - Size of the chip
 * @props `inline` - Whether the chip is inline
 */
export interface IPropsChip {
    backgroundColor?: string
    color?: string
    customStyles?: string
    label?: string
    position?: EPositions
    show?: boolean
    size?: string | number
    inline?: boolean
}
