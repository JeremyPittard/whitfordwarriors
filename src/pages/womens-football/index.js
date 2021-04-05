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
                                    Our Women’s team is getting ready for season 2021 with round kicking off on 24 April 2021 and the club is keen to shore up its playing numbers.
                                    Entering their first season in the competition, the women have embraced every challenge and continue to build on their skills and game sense ready for round 1.
                                    Training is on Tuesday and Thursday nights from 5.45pm at MacDonald Reserve, Padbury. <br/> <br/>
                                    If you enjoy keeping fit, being part of a team and looking for a winter sport, then joining our Warriors women’s team could be the thing for you.
                                    No experience required with plenty of time at training to improve and develop your skills with our experienced and dedicated coaching team.
                                    While there is enough talent to take the field for the 2021 campaign, the club continues to welcome players to ensure there is adequate coverage for the possible absence of players through unavailability.
                                    Anyone interested in playing or offering support in an off-field capacity should contact Brett on <a href="tel:0477775118">0477 775 118</a> or email <a href="mailto:womensfootball@whitfordwarriors.com.au">womensfootball@whitfordwarriors.com.au</a>.
                                    Players who have never played Australian football before are just as welcome as those who have experience in the sport.
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

