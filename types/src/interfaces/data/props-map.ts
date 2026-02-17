// @ts-expect-error Here has no types
import type H from '@here/maps-api-for-javascript/bin/mapsjs.bundle.harp.js'
import type {IMapMarker, IMedia, IPropsState} from '../../'

/**
 * Full list of mapViews can be found here:
 * https://www.here.com/docs/bundle/maps-api-for-javascript-api-reference/page/H.service.Platform.html#createDefaultLayers
 */

/**
 * @interface IPropsMap
 * @description Defines properties for the map component.
 * @props `additionalMapViews` `[vector.traffic.logistics]` Sets additional map views (e.g. vector.traffic.map)
 * @props `apiKey` `undefined` API key for the HERE map
 * @props `autoAddNewMarker` `undefined` Adds new markers automatically visually to the map. If not set, new markers will only be emitted
 * @props `centerMap` `false` Centers the map to display all markers, when available. If set to false, the map will be centered through options.center property. If you want to manipulate the zoom level or position, use the components exposed method `scrollToCoordinates`
 * @props `clustering` `true` Toggles clustering of the map's markers
 * @props `clusteringOptions` `undefined` Sets the clustering options for the map
 * @props `controls` `undefined` Sets the map's control buttons
 * @props `errorState` `undefined` Defines the error state of the map shown as a State
 * @props `forceMode` `undefined` Forces the map into a specific mode; consider showing the map indicators: `drag` lets the user drag the map, `setupBlackgrid` lets the user setupBlackgrid a marker, `marker_drag` lets the user drag a marker
 * @props `localization` `en-US` Defines the map's language localization
 * @props `mapView` `vector.normal.logistics` Sets the map's default layer view
 * @props `markers` `undefined` Sets the map's markers
 * @props `options` `see below` Sets the map's options
 * ```typescript
 * // default options
 * // note: higher zoom levels zoom in further
 * options: {center: {lat: 52.2586, lng: 9.0559}, zoom: 10}
 * ```
 * @props `routing` `undefined` Toggles routing of the markers
 * @props `routingAutoIndex` `undefined` While deleting, the route marker icon title of the next marker will be set to the same title as the deleted route marker. If set to false, the route marker will simply be deleted
 * @props `routingColor` `undefined` Sets the color of the route line
 * @props `routingMarker` `undefined` If set, draws a marker along the route line depending on the percentage
 * @props `routingPercentage` `undefined` Sets the progression of the route marker along the route line. If set to 0, the marker will be placed at the start of the route, if set to 100, it will be placed at the end of the route
 * @props `size` `undefined` Sets the size of the map. Default size is {height: '100%', width: '100%'}. If the size is set to a number, it will be shown in pixels, else it can be freely configured with CSS units
 * @props `stacked` `undefined` If set, markers within a radius of 5 meters will be summarized into a single marker, if they are of the same type
 * @props `transportMode` `car` Sets the transport mode for routing
 */
export interface IPropsMap {
    additionalMapViews?: Array<string>
    apiKey?: string
    autoAddNewMarker?: boolean
    centerMap?: boolean
    clustering?: boolean
    clusteringOptions?: IMapClusteringOptions
    controls?: IMapControls
    errorState?: IPropsState
    forceMode?: 'drag' | 'create' | 'marker_drag'
    localization?: string
    mapView?: string
    markers?: IMapMarker[]
    options?: H.Map.Options
    routing?: boolean
    routingAutoIndex?: boolean
    routingColor?: string
    routingMarker?: IMedia
    routingPercentage?: number
    size?: {
        height?: string | number
        width?: string | number
    }
    stacked?: boolean
    transportMode?: 'car' | 'pedestrian' | 'truck'
}

/**
 * @interface IMapControls
 * @description Defines the map's control buttons. Dragging and marker creation are only applicable to the base layer of the map.
 * @props `dragIndicator` `undefined` Toggles the drag indicator
 * @props `dragIndicatorTooltip` `undefined` Sets the drag indicator tooltip
 * @props `markerCreator` `undefined` Toggles the marker creator
 * @props `markerCreatorTooltip` `undefined` Sets the marker creator tooltip
 * @props `markerDrag` `undefined` Toggles the marker drag
 * @props `markerDragTooltip` `undefined` Sets the marker drag tooltip
 */
interface IMapControls {
    dragIndicator?: boolean
    dragIndicatorTooltip?: string
    markerCreator?: boolean
    markerCreatorTooltip?: string
    markerDrag?: boolean
    markerDragTooltip?: string
}

/**
 * @interface IMapClusteringOptions
 * @description Defines the clustering options for the map. Default options are: {eps: 10, minWeight: 2}.
 * @props `eps` `10` Defines the maximum distance between two markers to form a cluster
 * @props `minWeight` `2` Defines the minimum number of markers that need to fall within the eps distance to form a cluster
 */
interface IMapClusteringOptions {
    eps?: number
    minWeight?: number
}
