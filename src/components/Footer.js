import React from "react";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Colours from "../utils/colours";
import { MailchimpSubscribe } from "../components/mailchimpSubscribe";

const Footer = class extends React.Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer className="footer has-background-body has-text-white-ter">
                <div className="content has-text-centered has-background-body has-text-white-ter">
                    <div className="container has-background-body has-text-white-ter">
                        <div className="columns">
                            <div className="column is-4">
                                <section className="subscribe">
                                    <MailchimpSubscribe />
                                </section>
                            </div>
                            <div className="column is-4">
                                <section>
                                    <div className="content has-text-centered">
                                        <AniLink cover direction="down" duration={0.7} bg={Colours.blue} to="/" title="Logo">
                                            <img alt="whitford amatuer football club logo" src={logo} style={{ width: "14em", height: "10em" }} />
                                        </AniLink>
                                        <p>&copy; Copyright {year}</p>
                                    </div>
                                </section>
                            </div>
                            <div className="column is-4 has-text-right">
                                <div className="social has-text-right">
                                    <a title="facebook" href="https://www.facebook.com/whitfordafc">
                                        <img alt="wafc facebook" className="fas fa-lg" src={facebook} style={{ width: "1em", height: "1em" }} />
                                    </a>

                                    <a title="instagram" href="https://instagram.com/whitfordafc">
                                        <img src={instagram} alt="Instagram" style={{ width: "1em", height: "1em" }} />
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/whitfordafc" className="white-text" target="_blank" rel="noopener noreferrer">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/whitfordafc" className="white-text" target="_blank" rel="noopener noreferrer">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        site by &nbsp;
                                        <a href="https://jpittard.net" className="white-text" target="_blank" rel="noopener noreferrer">
                                            this guy.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
