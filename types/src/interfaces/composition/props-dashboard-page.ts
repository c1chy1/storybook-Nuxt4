import type {IPropsHeader, IPropsSidebar} from '../../'

/**
 * @interface IPropsDashboardPage
 * @description Defines properties for the dashboard composition component.
 * @props `headerProps` `undefined` Sets the properties for the header
 * @props `sidebarProps` `undefined` Sets the properties for the sidebar
 */
export interface IPropsDashboardPage {
    headerProps?: IPropsHeader
    sidebarProps?: IPropsSidebar
}
