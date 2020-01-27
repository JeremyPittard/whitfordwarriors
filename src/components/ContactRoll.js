import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const ContactList = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => (
                    <>
                        <div className="is-parent column is-4" key={`contact-${index}`}>
                            <article>
                                <h3>{post.frontmatter.title}</h3>
                            </article>
                        </div>
                    </>
                ))}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query ContactListQuery {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "contact-post" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            name
                            number
                            email
                            templateKey
                        }
                    }
                }
            }
        }
    `);
    return <ContactList data={data} />;
};
export default Posts;
