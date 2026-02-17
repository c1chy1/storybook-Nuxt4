/**
 * @interface IPropsChatBottomBar
 * @description Defines properties for the chat bottom bar composition component.
 * @props `autoFocus` `true` If set, automatically focuses the message input
 * @props `attachmentDisabled` `undefined` Sets the disabled state of the attachment button
 * @props `modelValue` `undefined` Sets the model value of the typed message
 * @props `openFileUploadDialog` `false` Opens the file upload dialog on attachment button click
 * @props `placeholder` `Type a message` Sets the placeholder of the message input
 * @props `sendButtonLabel` `Send message` Sets the label of the button
 * @props `sendDisabled` `undefined` Sets the disabled state of the send button
 */
export interface IPropsChatBottomBar {
    autoFocus?: boolean
    attachmentDisabled?: boolean
    modelValue?: string
    openFileUploadDialog?: boolean
    placeholder?: string
    sendButtonLabel?: string
    sendDisabled?: boolean
    attachmentIndicator?: number
}
