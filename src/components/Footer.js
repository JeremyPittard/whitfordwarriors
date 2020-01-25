import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
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
                                            <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} />
                                        </AniLink>
                                        <p>&copy; Copyright {year}</p>
                                    </div>
                                </section>
                            </div>
                            <div className="column is-4 has-text-right">
                                <div className="social has-text-right">
                                    <a title="facebook" href="https://www.facebook.com/whitfordafc">
                                        <img className="fas fa-lg" src={facebook} style={{ width: "1em", height: "1em" }} />
                                    </a>
                                    {/* <a title="twitter" href="https://twitter.com">
                                    <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
                                </a> */}
                                    <a title="instagram" href="https://instagram.com/whitfordafc">
                                        <img src={instagram} alt="Instagram" style={{ width: "1em", height: "1em" }} />
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="" className="white-text" target="_blank">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="white-text" target="_blank">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        site by &nbsp;
                                        <a href="https://jpittard.net" className="white-text" target="_blank">
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
