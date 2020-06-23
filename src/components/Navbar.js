import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Colours from "../utils/colours";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active",
                      })
                    : this.setState({
                          navBarActiveClass: "",
                      });
            }
        );
    };

    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <AniLink cover direction="down" duration={0.7} bg={Colours.blue} to="/" className="navbar-item logo" title="Logo">
                            <h3 className="has-text-weight-bold is-size-2 blue-text">WW</h3>
                        </AniLink>
                        {/* Hamburger menu */}
                        <div
                            role="button"
                            tabIndex="0"
                            className={`navbar-burger burger ${this.state.navBarActiveClass} `}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                            onKeyDown={(e) => e.key === "Enter" && this.toggleHamburger()}
                        >
                            <div className="behind goalpost"></div>
                            <div className="goal goalpost"></div>
                            <div className="goal goalpost"></div>
                            <div className="behind goalpost"></div>
                        </div>
                    </div>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass} `}>
                        <div className="navbar-start has-text-centered">
                            <AniLink className="navbar-item blue-text" cover direction="down" duration={0.7} bg={Colours.blue} to="/news">
                                News
                            </AniLink>
                            <AniLink className="navbar-item blue-text" cover direction="down" duration={0.7} bg={Colours.blue} to="/events">
                                Events
                            </AniLink>
                            <AniLink className="navbar-item blue-text" cover direction="down" duration={0.7} bg={Colours.blue} to="/honour-boards">
                                Honour Boards
                            </AniLink>

                            <AniLink className="navbar-item blue-text" cover direction="down" duration={0.7} bg={Colours.blue} to="/sponsors">
                                Sponsors
                            </AniLink>
                            <AniLink className="navbar-item blue-text" cover direction="down" duration={0.7} bg={Colours.blue} to="/contact">
                                Contact
                            </AniLink>
                            <a className="navbar-item blue-text" href="https://clubshop.net.au/whitfordwarriors/" target="_blank" rel="noopener noreferrer">
                                Merch
                            </a>
                            <AniLink className="navbar-item" cover direction="down" duration={0.7} bg={Colours.blue} to="/policies">
                                Policies
                            </AniLink>
                            <AniLink className="navbar-item" cover direction="down" duration={0.7} bg={Colours.blue} to="/womens-football">
                                Women's Footy
                            </AniLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
