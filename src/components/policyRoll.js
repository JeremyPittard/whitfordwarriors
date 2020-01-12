import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const policyRoll = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => {
                    // let i = index + 1;
                    // let delay = i < 4 ? `${i}00` : `${i - 3}00`;

                    return (
                        <>
                            <div className="is-parent column is-4" key={post.id}>
                                <a href={post.frontmatter.document} className="sponsor is-child" target="_blank" rel="noopener noreferrer">
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
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, filter: { frontmatter: { isMajor: { eq: true } } }) {
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
                                relativePath
                            }
                        }
                    }
                }
            }
        }
    `);
    return <policyRoll data={data} />;
};
export default Posts;
