import { useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import InfoBox from "./InfoBox";
import fireAlert from "@iconify/icons-mdi/fire-alert";
// import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const setInfo = (e) => {
        setLocationInfo({
            id: e.id,
            title: e.title,
            source: e.sources[0].url,
        });
    };
    const markers = eventData
        .map((ev) => {
            const location = [
                ev.geometries[0].coordinates[1],
                ev.geometries[0].coordinates[0],
            ];
            const info = `ID: ${ev.id}\nTitle:${ev.title}`;
            if (ev.categories[0].id === 8) {
                return {
                    location: location,
                    option: { color: "#dd3529" },
                    addHandler: "mouseover",
                    infoboxOption: {
                        title: "Event Location Info",
                        description: info,
                    },
                    pushPinOption: {
                        title: "",
                        description: "Pushpin",
                    },
                    icon: fireAlert,
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
                infoboxesWithPushPins={markers}
            />
            {/* {locationInfo && <InfoBox info={locationInfo} />} */}
        </div>
    );
};

Map.defaultProps = {
    // center: { latitude: 42.3265, longitude: -122.8756 },
    center: [42.3265, -122.8756],
    zoom: 6,
};

export default Map;
