import React from "react";
import logo from "../img/logo.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: ""
        };
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active"
                      })
                    : this.setState({
                          navBarActiveClass: ""
                      });
            }
        );
    };

    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <AniLink cover direction="right" bg="#3e4189" hex="#3e4189" to="/" className="navbar-item" title="Logo">
                            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
                        </AniLink>
                        {/* Hamburger menu */}
                        <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                        <div className="navbar-start has-text-centered">
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/news">
                                News
                            </AniLink>
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/events">
                                Events
                            </AniLink>
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/honour-boards">
                                Honour Boards
                            </AniLink>
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/sponsors">
                                Sponsors
                            </AniLink>
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/contact">
                                Contact
                            </AniLink>
                            <a className="navbar-item" href="https://clubshop.net.au/whitfordwarriors/" target="_blank" rel="noopener norel">
                                Merch
                            </a>
                            <AniLink className="navbar-item" cover direction="right" bg="#3e4189" to="/policies">
                                Policies
                            </AniLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
