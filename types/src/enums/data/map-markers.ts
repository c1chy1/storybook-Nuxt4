/**
 * @enum {string} EMapMarkers
 * @description Defines types used for the map markers.
 * @prop CUSTOM Represents a marker icon provided by a svg-template. To use this type, bind the `source` or `title` property to the svg content
 * @prop CLUSTER Sets the marker to a default cluster icon. Used for clustering
 * @prop TRUCK_PLACEHOLDER Shows a placeholder marker icon with a truck
 * @prop POI_PLACEHOLDER Shows a placeholder poi marker icon
 * @prop CONTAINER_INACTIVE Represents an inactive container marker
 * @prop EVENT_INACTIVE Represents an inactive event marker
 * @prop POI_INACTIVE Represents an inactive point of interest marker
 * @prop TRUCK_INACTIVE Represents an inactive truck marker
 * @prop CONTAINER_ACTIVE Represents an active container marker
 * @prop POI_ACTIVE Represents an active point of interest marker
 * @prop TRUCK_ACTIVE Represents an active truck marker
 * @prop CONTAINER_STACKED_INACTIVE Represents an inactive stacked container marker
 * @prop CONTAINER_STACKED_ACTIVE Represents an active stacked container marker
 * @prop TRUCK_STACKED_INACTIVE Represents an inactive stacked truck marker
 * @prop TRUCK_STACKED_ACTIVE Represents an active stacked truck marker
 */
export enum EMapMarkers {
    // Default inactive marker types
    CONTAINER_INACTIVE = 'container_inactive',
    EVENT_INACTIVE = 'event_inactive',
    POI_INACTIVE = 'poi_inactive',
    TRUCK_INACTIVE = 'truck_inactive',

    // Default active marker types
    CONTAINER_ACTIVE = 'container_active',
    POI_ACTIVE = 'poi_active',
    TRUCK_ACTIVE = 'truck_active',

    // Stacked inactive marker types
    CONTAINER_STACKED_INACTIVE = 'container_stacked_inactive',
    TRUCK_STACKED_INACTIVE = 'truck_stacked_inactive',

    // Stacked active marker types
    CONTAINER_STACKED_ACTIVE = 'container_stacked_active',
    TRUCK_STACKED_ACTIVE = 'truck_stacked_active',

    // Others
    CUSTOM = 'custom',
    CLUSTER = 'cluster',
    TRUCK_PLACEHOLDER = 'truck-placeholder',
    POI_PLACEHOLDER = 'poi-placeholder',
}
