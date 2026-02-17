import type {IMedia} from '../base/media'

export interface IPropsConfirmationDialog {
    open: boolean
    title?: string
    message?: string
    confirmButton?: {
        text?: string
        onConfirm?: () => void
        icon?: IMedia
    }
    cancelButton?: {
        text?: string
        onCancel?: () => void
        icon?: IMedia
    }
}
