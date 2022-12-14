export declare type GoogleMapLibrary =
  | "drawing"
  | "geometry"
  | "places"
  | "visualization"

export declare type GoogleMapShape =
  | google.maps.Marker
  | google.maps.Polygon
  | google.maps.Polyline
  | google.maps.Circle
  | google.maps.Rectangle

export declare type GoogleMapLayer =
  | google.maps.BicyclingLayer
  | google.maps.TrafficLayer
  | google.maps.TransitLayer

export declare type GoogleMapObjectWithSetMap =
  | GoogleMapShape
  | GoogleMapLayer
  | google.maps.GroundOverlay
  | google.maps.KmlLayer
  | google.maps.drawing.DrawingManager
  | google.maps.visualization.HeatmapLayer

export declare type GoogleMapObjectWithSetOptions =
  | google.maps.Map
  | GoogleMapShape
  | google.maps.TrafficLayer
  | google.maps.StreetViewPanorama
  | google.maps.KmlLayer
  | google.maps.drawing.DrawingManager
  | google.maps.places.Autocomplete

export declare type GoogleMapObject =
  | GoogleMapObjectWithSetMap
  | google.maps.StreetViewPanorama
  | google.maps.places.SearchBox
  | google.maps.places.Autocomplete

declare type MapPanes =
  | "floatPane"
  | "mapPane"
  | "markerLayer"
  | "overlayLayer"
  | "overlayMouseTarget"

export declare type Layers = "bicycling" | "traffic" | "transit"

// Google Map context

export interface GoogleMapReducer {
  state: GoogleMapState
  dispatch: React.Dispatch<GoogleMapAction>
}

export interface GoogleMapState {
  map?: google.maps.Map
  objects: Map<string, GoogleMapObject>
  places?: google.maps.places.PlacesService
}

export interface GoogleMapAction {
  type: string
  map?: google.maps.Map
  object?: GoogleMapObject
  id?: string
  places?: google.maps.places.PlacesService
  search?: google.maps.places.SearchBox
}

export interface GoogleMapProviderProps {
  children: React.ReactNode
}

//Map Return Event
export interface MapReturnEvent {
  bounds?: {
    nw: {
      lat: google.maps.LatLngBounds | any | null | undefined
      lng: google.maps.LatLngBounds | any | null | undefined
    }
    se: {
      lat: google.maps.LatLngBounds | any | null | undefined
      lng: google.maps.LatLngBounds | any | null | undefined
    }
    center: google.maps.LatLngLiteral | any | null | undefined
  }
  center: google.maps.LatLngLiteral | any | null | undefined
  zoom: number | any | null | undefined
  map: google.maps.Map | any | null | undefined
}

// Map

export interface MapProps {
  apiKey?: string
  className?: string
  style?: React.CSSProperties
  language?: string
  region?: string
  version?: string
  useDrawing?: boolean
  useGeometry?: boolean
  usePlaces?: boolean
  useVisualization?: boolean
  LoadingComponent?: React.ReactNode
  LoadedComponent?: React.ReactNode
  opts?: google.maps.MapOptions
  onBoundsChanged?: (event?: any | MapReturnEvent) => any
  onCenterChanged?: (event?: any | MapReturnEvent) => any
  onClick?: (event: google.maps.MapMouseEvent) => any
  onChange?: (event?: any | MapReturnEvent) => any
  onDoubleClick?: (event: google.maps.MapMouseEvent) => any
  onDrag?: (event?: any | MapReturnEvent) => any
  onDragEnd?: (event?: any | MapReturnEvent) => any
  onDragStart?: (event?: any | MapReturnEvent) => any
  onHeadingChanged?: (event?: any) => any
  onIdle?: (event?: any | MapReturnEvent) => any
  onMapTypeIdChanged?: (event?: any) => any
  onMouseMove?: (event: google.maps.MapMouseEvent) => any
  onMouseOut?: (event: google.maps.MapMouseEvent) => any
  onMouseOver?: (event: google.maps.MapMouseEvent) => any
  onProjectionChanged?: (event?: any) => any
  onRightClick?: (event: google.maps.MapMouseEvent) => any
  onTilesLoaded?: (event?: any) => any
  onTiltChanged?: (event?: any) => any
  onZoomChanged?: (event?: any) => any
}

// Marker

export interface MarkerProps {
  id?: string
  opts?: google.maps.MarkerOptions
  onAnimationChanged?: () => any
  onClick?: (event: google.maps.MapMouseEvent) => any
  onChange?: (event?: any | MapReturnEvent) => any
  onClickableChanged?: () => any
  onCursorChanged?: () => any
  onDoubleClick?: (event: google.maps.MapMouseEvent) => any
  onDrag?: (event: google.maps.MapMouseEvent) => any
  onDragEnd?: (event: google.maps.MapMouseEvent) => any
  onDraggableChanged?: () => any
  onDragStart?: (event: google.maps.MapMouseEvent) => any
  onFlatChanged?: () => any
  onIconChanged?: () => any
  onMouseDown?: (event: google.maps.MapMouseEvent) => any
  onMouseOut?: (event: google.maps.MapMouseEvent) => any
  onMouseOver?: (event: google.maps.MapMouseEvent) => any
  onMouseUp?: (event: google.maps.MapMouseEvent) => any
  onPositionChanged?: () => any
  onRightClick?: (event: google.maps.MapMouseEvent) => any
  onShapeChanged?: () => any
  onTitleChanged?: () => any
  onVisibleChanged?: () => any
  onZIndexChanged?: () => any
}

// InfoWindow
export interface InfoWindowProps {
  anchorId?: string
  opts?: google.maps.InfoWindowOptions
  visible?: boolean
  children?: React.ReactNode
  onCloseClick?: () => any
  onContentChanged?: () => any
  onDOMReady?: () => any
  onPositionChanged?: () => any
  onZIndexChanged?: () => any
}

// Shapes

interface ShapeProps {
  id?: string
  onClick?: (event: google.maps.MapMouseEvent) => any
  onDoubleClick?: (event: google.maps.MapMouseEvent) => any
  onDrag?: (event: google.maps.MapMouseEvent) => any
  onDragEnd?: (event: google.maps.MapMouseEvent) => any
  onDragStart?: (event: google.maps.MapMouseEvent) => any
  onMouseDown?: (event: google.maps.MapMouseEvent) => any
  onMouseOut?: (event: google.maps.MapMouseEvent) => any
  onMouseOver?: (event: google.maps.MapMouseEvent) => any
  onMouseUp?: (event: google.maps.MapMouseEvent) => any
  onRightClick?: (event: google.maps.MapMouseEvent) => any
}

export interface PolylineProps extends ShapeProps {
  opts?: google.maps.PolylineOptions
}

export interface PolygonProps extends ShapeProps {
  opts?: google.maps.PolygonOptions
}

export interface CircleProps extends ShapeProps {
  opts?: google.maps.CircleOptions
  onCenterChanged?: () => any
  onRadiusChanged?: (event: google.maps.MapMouseEvent) => any
}

export interface RectangleProps extends ShapeProps {
  opts?: google.maps.RectangleOptions
  onBoundsChanged?: () => any
}

// HeatMap

export interface WeightedLatLng extends google.maps.LatLngLiteral {
  weight?: number
}
export interface HeatmapLayerOptions
  extends Omit<google.maps.visualization.HeatmapLayerOptions, "data"> {
  data: WeightedLatLng[]
}

export interface HeatMapProps {
  id?: string
  opts?: HeatmapLayerOptions
}

// OverlayView

export interface OverlayViewProps {
  pane?: MapPanes
  children: React.ReactNode
  position?: google.maps.LatLngLiteral
  onClick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onDoubleClick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onMouseDown?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onMouseOver?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onMouseOut?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onMouseUp?: (this: GlobalEventHandlers, ev: MouseEvent) => any
  onTouchEnd?: (this: GlobalEventHandlers, ev: TouchEvent) => any
  onTouchStart?: (this: GlobalEventHandlers, ev: TouchEvent) => any
  disableMapHits?: boolean
  disableMapHitsAndGestures?: boolean
}

// StreetView

export interface StreetViewProps {
  className?: string
  style?: React.CSSProperties
  opts?: google.maps.StreetViewPanoramaOptions
  onCloseClick?: (event: google.maps.MapMouseEvent) => any
  onPanoChanged?: () => any
  onPositionChanged?: () => any
  onPovChanged?: () => any
  onResize?: () => any
  onStatusChanged?: () => any
  onVisibleChanged?: () => any
  onZoomChanged?: () => any
}

export interface StandaloneStreetViewProps extends StreetViewProps {
  id?: string
}

export interface BasicStreetViewProps extends StandaloneStreetViewProps {
  bindToMap: boolean
}

// BicyclingLayer | TransitLayer | TrafficLayer

export interface LayerProps {
  type: Layers
  opts?: google.maps.TrafficLayerOptions
}

export interface TrafficLayerProps {
  opts?: google.maps.TrafficLayerOptions
}

// GroundOverlay

export interface GroundOverlayOptions {
  url: string
  bounds: google.maps.LatLngBoundsLiteral
  clickable?: boolean
  opacity?: number
}

export interface GroundOverlayProps {
  id?: string
  opts?: GroundOverlayOptions
  onClick?: (event: google.maps.MapMouseEvent) => any
  onDoubleClick?: (event: google.maps.MapMouseEvent) => any
}

// Autocomplete

declare type ControlPositionName =
  | "BOTTOM_CENTER"
  | "BOTTOM_LEFT"
  | "BOTTOM_RIGHT"
  | "LEFT_BOTTOM"
  | "LEFT_CENTER"
  | "LEFT_TOP"
  | "RIGHT_BOTTOM"
  | "RIGHT_CENTER"
  | "RIGHT_TOP"
  | "TOP_CENTER"
  | "TOP_LEFT"
  | "TOP_RIGHT"

export interface StandaloneAutocompleteProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string
  opts?: google.maps.places.AutocompleteOptions
  onPlaceChanged?: () => any
}

export interface BasicAutocompleteProps extends StandaloneAutocompleteProps {
  bindingPosition?: ControlPositionName
}

export interface AutocompleteProps extends StandaloneAutocompleteProps {
  bindingPosition: ControlPositionName
}

// SearchBox

export interface StandaloneSearchBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string
  opts?: google.maps.places.SearchBoxOptions
  onPlacesChanged?: () => any
}

export interface BasicSearchBoxProps extends StandaloneSearchBoxProps {
  bindingPosition?: ControlPositionName
}

export interface SearchBoxProps extends StandaloneSearchBoxProps {
  bindingPosition: ControlPositionName
}

// KmlLayer

export interface KmlLayerProps {
  id?: string
  opts?: google.maps.KmlLayerOptions
  onClick?: (event: google.maps.KmlMouseEvent) => any
  onDefaultViewportChanged?: () => any
  onStatusChanged?: () => any
}

// CustomControl

export interface CustomControlProps {
  bindingPosition?: ControlPositionName
  children: React.ReactNode
}

// DrawingManager

export interface DrawingManagerProps {
  opts?: google.maps.drawing.DrawingManagerOptions
  onCircleComplete?: (circle: google.maps.Circle) => any
  onMarkerComplete?: (marker: google.maps.Marker) => any
  onOverlayComplete?: (event: google.maps.drawing.OverlayCompleteEvent) => any
  onPolygonComplete?: (polygon: google.maps.Polygon) => any
  onPolylineComplete?: (polyline: google.maps.Polyline) => any
  onRectangleComplete?: (rectangle: google.maps.Rectangle) => any
}
