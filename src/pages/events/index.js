import React from "react";

import EventsRoll from "../../components/EventsRoll";
import Colours from "../../utils/colours";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/blog-index.jpg')`
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            backgroundColor: Colours.blue,
                            color: "white",
                            padding: "1rem"
                        }}
                    >
                        Club Events
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <EventsRoll />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
