import GoogleMapReact from "google-map-react";

function Map({ center, zoom }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCPP3mUoDPonGi5CKEOKWGG6xpJ5CrZxBE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: { lat: 42.3265, lng: -122.8756 },
  zoom: 6,
};

export default Map;
