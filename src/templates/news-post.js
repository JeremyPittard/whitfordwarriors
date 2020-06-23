import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const NewsPostTemplate = ({ content, contentComponent, description, title, helmet, featuredimage, date }) => {
    const PostContent = contentComponent || Content;
    return (
        <>
            {helmet || ""}
            <div className="article__header">
                <div className="article__image-wrap">
                    <PreviewCompatibleImage imageInfo={{ image: featuredimage, alt: `featured image thumbnail for post ${title}` }} />
                </div>

                <div className="article__details-wrap">
                    <h1 className="article-title is-size-1">{title}</h1>
                    <em>published on: {date}</em>
                    <em>{description}</em>
                </div>
            </div>
            <div className="section">
                <div className="columns is-multiline">
                    <div className="column is-4 is-offset-4">
                        <PostContent content={content} />
                    </div>
                </div>
            </div>
        </>
    );
};

NewsPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    featuredimage: PropTypes.object,
    date: PropTypes.string,
};

const NewsPost = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <>
            <NewsPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                featuredimage={post.frontmatter.featuredimage}
                date={post.frontmatter.date}
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

NewsPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default NewsPost;

export const pageQuery = graphql`
    query NewsPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
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
