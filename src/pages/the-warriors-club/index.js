import React from "react";
import Colours from "../../utils/colours";
import { ClubMailchimpSubscribe } from "../../components/WarriorClubSubscribe";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0 filtered"
                    style={{
                        backgroundImage: `url('/img/the-club.jpg')`,
                        backgroundPosition: 'center'
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
                        The Warriors Club
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5">
                                <h2 className="is-size-2">Coming Soon...</h2>
                                <p>
                                    Sign up below to be the first to be told about how to join 
                                </p>
                                <div className="content womens-footy-form">
                                    <ClubMailchimpSubscribe />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
