import { ReactBingmaps } from "react-bingmaps";
// import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData
        .map((ev) => {
            if (ev.categories[0].id === 8) {
                return {
                    location: [
                        ev.geometries[0].coordinates[1],
                        ev.geometries[0].coordinates[0],
                    ],
                };
            }
            return null;
        })
        .filter((ev) => {
            if (ev != null) {
                return ev;
            }
        });

    return (
        <div className="map">
            <ReactBingmaps
                bingmapKey="AkoapnZDPXZkwbySJOyudIoXCNbp3YTot08xL_r6qc68rcMEleLXK_2nf2s3gRmc"
                center={center}
                zoom={zoom}
                pushPins={markers}
            />
        </div>
    );
};

Map.defaultProps = {
    // center: { latitude: 42.3265, longitude: -122.8756 },
    center: [42.3265, -122.8756],
    zoom: 6,
};

export default Map;
