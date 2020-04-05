import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import document from "../../static/img/document.svg";

export const PolicyRoll = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="columns is-multiline policy-roll">
            {posts &&
                posts.map(({ node: post }, index) => {
                    return (
                        <>
                            <div className="is-parent column is-4 is-flex justify-center" key={post.id}>
                                <a href={post.frontmatter.document.absolutePath} className="sponsor is-child blue-text policy-card" target="_blank" rel="noopener noreferrer" download>
                                    <img src={document} alt={post.frontmatter.title} />
                                    <article>{post.frontmatter.title}</article>
                                </a>
                            </div>
                        </>
                    );
                })}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query policyRollQuery {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "policy" } } }) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            document {
                                absolutePath
                            }
                        }
                    }
                }
            }
        }
    `);
    return <PolicyRoll data={data} />;
};
export default Posts;
