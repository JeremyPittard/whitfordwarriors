import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "../styles/_main.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import "typeface-raleway";
import "typeface-montserrat";
import Colours from "../utils/colours";

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix("/")}img/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-32x32.png`} sizes="32x32" />
                <link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-16x16.png`} sizes="16x16" />

                <link rel="mask-icon" href={`${withPrefix("/")}img/safari-pinned-tab.svg`} color={Colours.blue} />
                <meta name="theme-color" content={Colours.blue} />
                <meta name="robots" content="noindex" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
            </Helmet>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default TemplateWrapper;
