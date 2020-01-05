import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Colours from "../utils/colours";

export const IndexPageTemplate = ({ image, title, subheading, mainpitch, description, intro, hideImage }) => {
    return (
        <div>
            <div
                className="full-width-image margin-top-0"
                style={{
                    backgroundImage: hideImage ? "" : `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
                    backgroundColor: Colours.blue,
                    backgroundPosition: `top left`,
                    backgroundAttachment: `fixed`
                }}
            >
                <div
                    style={{
                        display: "flex",
                        height: "150px",
                        lineHeight: "1",
                        justifyContent: "space-around",
                        alignItems: "left",
                        flexDirection: "column"
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
                        style={{
                            backgroundColor: Colours.blue,
                            color: "white",
                            padding: "0.25em"
                        }}
                    >
                        {title}
                    </h1>
                    <h2
                        className="has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                        style={{
                            backgroundColor: Colours.blue,
                            color: "white",
                            lineHeight: "1",
                            padding: "0.25em"
                        }}
                    >
                        {subheading}
                    </h2>
                </div>
            </div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">
                                    <div className="content">
                                        <div className="tile">
                                            <h1 className="title blue-text">{mainpitch.title}</h1>
                                        </div>
                                        <div className="tile">
                                            <h3 className="subtitle blue-text">{mainpitch.description}</h3>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <Features gridItems={intro.blurbs} />
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2 blue-text">What's happening around the club</h3>
                                        <BlogRoll />
                                    </div>
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2 blue-text">Our Friends</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array
    }),
    hideImage: PropTypes.bool
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <>
            <IndexPageTemplate
                image={frontmatter.image}
                hideImage={frontmatter.hideImage}
                title={frontmatter.title}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                subheading
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                hideImage
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                }
            }
        }
    }
`;
