import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";

const App = () => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await fetch(
                "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=WJZh3ZjsvDbpSUpWHIp1PtTe2Sb696phh6aHboV4"
            );
            const { events } = await res.json();

            setEventData(events);
            setLoading(false);
        };

        fetchEvents();
    }, []);

    return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
};

export default App;
