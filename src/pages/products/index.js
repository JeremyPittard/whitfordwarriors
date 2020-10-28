import React from "react";

import NewsRoll from "../../components/NewsRoll";
import Colours from "../../utils/colours";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0 filtered"
                    style={{
                        backgroundImage: `url('/img/news.png')`
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
                        Latest News
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <NewsRoll />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
