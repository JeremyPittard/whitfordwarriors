import React from "react";

import HonourRoll from "../../components/HonourRoll";
import Colours from "../../utils/colours";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0 filtered"
                    style={{
                        backgroundImage: `url('/img/honour.jpg')`
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
                        Honour Boards
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <HonourRoll />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
