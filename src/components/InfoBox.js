const InfoBox = ({ info }) => {
    return (
        <div className="infobox">
            <h2>Event Location Info</h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                </li>
                <li>
                    Title: <strong>{info.title}</strong>
                </li>
                <li>Get more info at: {info.source}</li>
            </ul>
        </div>
    );
};

export default InfoBox;
