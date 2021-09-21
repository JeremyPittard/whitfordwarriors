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
                backgroundImage: `url('/img/womens-footy.jpg')`,
              }}
            >
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  backgroundColor: Colours.blue,
                  color: "white",
                  padding: "1rem",
                }}
              >
                Womens Footy
              </h1>
            </div>
            <section className="section">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-5">
                    <h2 className="is-size-2">
                      Womens Footy is coming in 2021
                    </h2>
                    <p>
                      Whitford Amateur Football Club is proud to have women's
                      teams playing for the first time in 2021.<br /><br/>Whitford AFC is
                      committed to providing all women with an opportunity to
                      play Australian Rules football and to enjoy our great game
                      in a positive and welcoming club environment.<br/> <br/> Players of
                      all ages, levels of experience and abilities are welcome
                      to join us either as a player or simply to be involved
                      offering off field support. <br /><br/>If you enjoy keeping fit,
                      being part of a team and looking for a winter sport, then
                      joining our Whitford Warriors women’s football team could
                      be for you.
                    </p>
                    <h2>
                    TRAINING
                    </h2>
<p>

Training takes place weekly at the club's MacDonald Reserve facility in Padbury each Tuesdayand Thursday from 5.45pm (for a 6.00 pm start)<br /><br/> 
Our coaches tailor sessions to ensure that all players are developing their skills and improving both individually and as a team. <br /><br/>
We have a top-quality clubroom facility, floodlights and have uniforms and equipment available to players.<br /><br/> Bring your shoes, boots, fitness gear and get ready to have some fun!
</p>
 
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
}

