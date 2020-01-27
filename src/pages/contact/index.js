import React from "react";
import { navigate } from "gatsby-link";
import LeafletMap from "../../components/LeafletMap";
import { ContactList } from "../../components/ContactRoll";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    render() {
        return (
            <>
                <section className="section map-section">
                    <div className="map-container">
                        {typeof window !== "undefined" && (
                            <LeafletMap position={[-31.804494, 115.756956]} zoom={16} markerText={"Whitford Warriors Football and Netball Club is located on the corner of Forrest road and Marmoin Avenue in Padbury "} />
                        )}
                    </div>
                    <div>
                        <ContactList />
                    </div>
                </section>
            </>
        );
    }
}
