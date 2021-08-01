import React from "react";
import Colours from "../../utils/colours";

const InsurancePage = () => {
  return (
    <>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundColor: Colours.blue,
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
          Insurance Information
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <h2 className="is-size-2 mb-1">Insurance</h2>
              <p className="mb-2">
                Perth Football League insurances are with Marsh under a ‘whole
                of football’ policy with the WA Football Commission.
              </p>
              <p className="mb-2">
                You can make a claim from the Home Page of this Website.
                Personal accident insurance:{" "}
                <a
                  href="https://sport.marshadvantage.com.au/afl/"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  sport.marshadvantage.com.au/afl/
                </a>
                <ul className="a-left">
                  <li>- Select Players &amp; Officials start here</li>
                  <li>- Select Make a Claim </li>
                  <li>
                    - For Information - Select Forms &amp; Fact Sheets / then
                    Select Information &amp; Fact Sheets{" "}
                  </li>
                </ul>
              </p>
              <h3 className="is-size-3 mb-1">Certificate of Currency</h3>
              <p className="mb-2">
                Insurance cover is from 1 November to 31 October.
              </p>
              <h3 className="is-size-3 mb-1">Clubs</h3>
              <p className="mb-2">
                A portion of a club’s annual affiliation fee pays the Perth
                Football League insurance premium.
              </p>
              <h3 className="is-size-3 mb-1">
                Match Day Checklist – Marsh APP
              </h3>
              <p className="mb-2">
                The checklist is a pre-game inspection tool that helps to
                identify safety concerns and record them. It must be completed
                before the{" "}
                <strong>first match of the day or if conditions change.</strong>
                <br />
                <br />
                The mobile App is available for free download at the{" "}
                <a
                  href="https://itunes.apple.com/au/genre/ios/id36?mt=8"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Apple App store
                </a>
                and
                <a
                  href="http://play.google.com/store?hl=en"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Google Play.
                </a>
              </p>
              <h3 className="is-size-3 mb-1">
                SUMMARY – Perth Football League INSURANCES
              </h3>
              <p className="mb-2">
                For full details on cover, please visit
                <a
                  href="sport.marshadvantage.com.au/afl/"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                >
                  sport.marshadvantage.com.au/afl/
                </a>
                &nbsp; Please note there is an excess for all claims.
                <ol>
                  <li>
                    <strong>Public Liability Cover</strong>
                  </li>
                  <li>
                    <strong>Club Management Liability Cover</strong>
                    <p>
                      This cover extends only to all incorporated Australian
                      Football Clubs and Associations/Leagues of each State and
                      Territory. Other created entities, being Sports Clubs with
                      several different sports/recreation activities, will not
                      be covered for claims under the Management Liability
                      (Forefront) policy.{" "}
                    </p>
                  </li>
                  <li>
                    <strong>Personal Injury (Base cover - Bronze lebel)</strong>
                    <p>
                      Marsh Personal Injury Cover
                      <ul className="a-left">
                        <li>Is not private health cover.</li>
                        <li>Is not Workers' compensation cover</li>
                        <li>
                          Will not provide a full rebate on injury mangement
                        </li>
                        <li>Does not cover for Loss of Income</li>
                        <li>
                          <a href="http://www.wafooty.com.au/download/d/KMJ83GTvQwOn9snKdWZ5ylLdIVOmR3xr3TU1J_ZNlYA">
                            Injury Costs &amp; Management
                          </a>
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <strong>Quad/Para cover</strong>
                    <p>
                      Marsh cover clubs for capital benefits up to $1,000,000.
                    </p>
                  </li>
                  <li>
                    <strong>Loss of Income cover</strong>
                    <p>
                      No Loss of Income cover is provided by the Perth Football
                      League's insurance.
                      <ul className="a-left">
                        <li>
                          Whitford Amateur Football Club encourages all players
                          to investigate and hold Loss of Income cover if their
                          personal situation warrants.
                        </li>
                      </ul>
                    </p>
                  </li>
                </ol>
              </p>
              <h3 className="is-size-3 mb-1">Private Health Cover</h3>
              <p>
                Marsh Personal Insurance for injury cover is not a replacement
                for private health cover.
                <ul className="a-left">
                  <li>
                    The Perth Football League and the Whitford Amateur Football
                    Club encourages all players to have private health cover.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsurancePage;
