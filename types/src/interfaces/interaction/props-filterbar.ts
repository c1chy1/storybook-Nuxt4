import type {ESizes} from '../../enums'

/**
 * @interface IPropsFilterbar
 * @description Defines properties for the filterbar component.
 * @props `activeFilterCount` `undefined` Defines the active filter count
 * @props `applyText` `Apply` Defines the apply text
 * @props `disabled` `undefined` Defines if the filterbar is disabled
 * @props `modalHeader` `Filter Overview` Sets the modal header
 * @props `modalSize` `ESizes.DEFAULT` Sets the modal size
 * @props `onApply` `undefined` Sets the callback for the apply button
 * @props `onReset` `undefined` Sets the callback for the reset button
 * @props `resetText` `Reset` Defines the reset text of the reset button
 * @props `showFilterButton` `true` Defines whether the filter button should be shown
 * @props `showModalCloseButton` `false` Defines whether the modal close button should be shown
 */

export interface IPropsFilterbar {
    activeFilterCount?: number
    applyText?: string
    disabled?: boolean
    modalHeader?: string
    modalSize?: ESizes
    onApply?: () => void
    onReset?: () => void
    resetText?: string
    showFilterButton?: boolean
    showModalCloseButton?: boolean
}
