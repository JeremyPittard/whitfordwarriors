import React from "react";
import { navigate } from "gatsby-link";
import LeafletMap from "../../components/LeafletMap";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    render() {
        return (
            <>
                <section className="section">
                    <div className="columns is-6">{typeof window !== "undefined" && <LeafletMap position={[-31.804494, 115.756956]} zoom={16} markerText={"Hello, this is a marker"} />}</div>
                </section>
            </>
        );
    }
}
