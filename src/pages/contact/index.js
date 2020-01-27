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
                    <LeafletMap />
                </section>
            </>
        );
    }
}
