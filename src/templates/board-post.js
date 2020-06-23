import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const BoardTemplate = ({ content, contentComponent, description, title, helmet, featuredimage }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            {helmet || ""}
            <section className="section article-header has-text-centered honour-board">
                <div className="columnm is-12 article-title-container has-text-centered">
                    <h1 className="article-title is-size-1 has-text-centered">{title}</h1>
                    <em>{description}</em>
                </div>
            </section>
            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-12">
                            <PostContent content={content} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

BoardTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const Board = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <>
            <BoardTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | News">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
                    </Helmet>
                }
                title={post.frontmatter.title}
            />
        </>
    );
};

Board.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default Board;

export const pageQuery = graphql`
    query BoardByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 720, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                date(formatString: "MMMM DD, YYYY")
                title
                description
                type
            }
        }
    }
`;
