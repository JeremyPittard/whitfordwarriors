import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

export const BoardTemplate = ({ content, contentComponent, description, title, helmet }) => {
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

BoardTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object
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
        markdownRemark: PropTypes.object
    })
};

export default Board;

export const pageQuery = graphql`
    query BoardByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                type
            }
        }
    }
`;
