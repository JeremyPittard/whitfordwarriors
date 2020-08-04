import React from "react";
import Colours from "../../utils/colours";
import { WomensMailchimpSubscribe } from "../../components/WomensFootySubscribe";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <>
                <div
                    className="full-width-image-container margin-top-0 filtered"
                    style={{
                        backgroundImage: `url('/img/womens-footy.jpg')`
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
                        Womens Footy
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5">
                                <h2 className="is-size-2">Womens Footy is coming in 2021</h2>
                                <p>
                                    As a club we are pleased to announce our intention of submitting a womens team into the comp in 2021
                                    <br />
                                    We hope to hit the ground running so instead of starting a team this year we have started to do prep to make sure our club is in the best position possible to support putting teams out on the field.
                                    <br />
                                    to keep up to date with womens footy at the club please enter your email below. if you wish to help out, participate, coach or anything in between please feel free to contact{" "}
                                    <a href="mailto:womensfootball@whitfordafc.com.au">womensfootball@whitfordafc.com.au</a>
                                </p>
                                <div className="content womens-footy-form">
                                    <WomensMailchimpSubscribe />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
