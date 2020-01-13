import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Colours from "../utils/colours";

export const EventPostTemplate = ({ content, contentComponent, description, title, helmet, featuredimage, eventDate }) => {
    const PostContent = contentComponent || Content;
    console.log(featuredimage);
    console.log(featuredimage.childImageSharp.fluid.src);
    return (
        <>
            {helmet || ""}

            <div className="full-width-image-container margin-top-0 article-header">
                <h1
                    className="has-text-weight-bold is-size-1"
                    style={{
                        backgroundColor: Colours.blue,
                        padding: "1rem"
                    }}
                >
                    {title}
                </h1>
            </div>
            <section className="section">
                <div className="columns">
                    <div className="column is-4 is-offset-2">
                        <PreviewCompatibleImage imageInfo={{ image: featuredimage, alt: `featured image thumbnail for post ${title}` }} />
                    </div>
                    <div className="column is-4">
                        <p>
                            <em>Event on: {eventDate}</em>
                        </p>
                        <p>
                            <em>{description}</em>
                        </p>
                        <PostContent content={content} className={`drop-cap`} />
                    </div>
                </div>
            </section>
        </>
    );
};

EventPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    featuredimage: PropTypes.object,
    eventDate: PropTypes.string
};

const EventPost = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <>
            <EventPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                featuredimage={post.frontmatter.featuredimage}
                eventDate={post.frontmatter.eventDate}
                helmet={
                    <Helmet titleTemplate="%s | News">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
                        <meta property="og:url" content={post.slug} />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content={post.frontmatter.title} />
                        <meta property="og:image" content={post.frontmatter.featuredimage.childImageSharp.fluid.src} />
                    </Helmet>
                }
                title={post.frontmatter.title}
            />
        </>
    );
};

EventPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    })
};

export default EventPost;

export const pageQuery = graphql`
    query EventPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                eventDate(formatString: "MMMM DD, YYYY")
                title
                description
                type
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 600, maxHeight: 450, quality: 80, cropFocus: ATTENTION) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
