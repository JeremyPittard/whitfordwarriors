import React from "react";
import Colours from "../../utils/colours";

import FullSponsorsRoll from "../../components/fullSponsorsRoll";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0 filtered"
                    style={{
                        backgroundImage: `url('/img/sponsors.jpg')`
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            backgroundColor: Colours.blue,
                            color: Colours.white,
                            padding: "1rem"
                        }}
                    >
                        Club Sponsors
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <FullSponsorsRoll />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
