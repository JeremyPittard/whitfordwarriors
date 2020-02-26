import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

export const SponsorsPostTemplate = ({ content, contentComponent, description, title, helmet }) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section">
            {helmet || ""}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                    </div>
                </div>
            </div>
        </section>
    );
};

SponsorsPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object
};

const SponsorsPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <>
            <SponsorsPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
                    </Helmet>
                }
                title={post.frontmatter.title}
            />
        </>
    );
};

SponsorsPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    })
};

export default SponsorsPost;

export const pageQuery = graphql`
    query SponsorsPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                isMajor
                logo {
                    childImageSharp {
                        fluid(maxWidth: 600, maxHeight: 450, quality: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                description
                website
            }
        }
    }
`;
