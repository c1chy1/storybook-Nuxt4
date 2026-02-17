import type {EOverlays, ESizes} from '../../'

/**
 * @interface IPropsModal
 * @description The properties for the modal component.
 * @props `title` `''` Sets the title displayed in the modal header
 * @props `open` `false` Toggles the open state of the modal
 * @props `size` `ESizes.DEFAULT` Sets
 * @props `type` `EOverlays.DEFAULT` Sets the overlay type. This allows the modal to be force closed, not closable
 * via outside click or default behaviour
 */
export interface IPropsModal {
    title?: string
    open?: boolean
    size?: ESizes
    type?: EOverlays
}
