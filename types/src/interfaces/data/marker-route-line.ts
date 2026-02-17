// @ts-expect-error Here has no types
import type H from '@here/maps-api-for-javascript/bin/mapsjs.bundle.harp.js'

/**
 * @interface IMarkerRouteLine
 * @description Sets the properties for the marker route line.
 * @props `lineStrings` `undefined` Sets the line string for the route line
 * @props `percentage` `undefined` Sets the percentage of the route line
 * @props `routeLine` `undefined` Sets the route line
 * @props `routeLineMarker` `undefined` Sets the route line marker
 * @props `totalPolylinePoints` `undefined` Sets the total polyline points
 */
export interface IMarkerRouteLine {
    lineStrings?: H.geo.LineString[]
    percentage?: number
    routeLine?: H.map.Polyline
    routeLineMarker?: H.map.Marker
    totalPolylinePoints?: number
}
