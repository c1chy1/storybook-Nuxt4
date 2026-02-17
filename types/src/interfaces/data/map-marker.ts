import type {EMapMarkers, IMapMarkerIcon, IPosition, IPropsDetailCard} from '../../'

/**
 * @interface IMapMarker
 * @description Defines properties for the map marker.
 * @props `detailCard` `undefined` Defines properties for the popup detail card (single card or array of cards)
 * @props `icon` `undefined` Custom icon or default icons via type
 * @props `id` `undefined` Unique id of the marker
 * @props `meta` `undefined` Meta information of the map marker
 * @props `position` `undefined` Latitude and longitude of the marker
 * @props `tooltip` `undefined` Tooltip of the marker
 * @props `type` `undefined` Sets the type of the marker
 */
export interface IMapMarker {
    detailCard?: IPropsDetailCard | Array<IPropsDetailCard>
    icon?: IMapMarkerIcon
    id?: string
    meta?: any
    position?: IPosition
    tooltip?: string
    type?: EMapMarkers
}
