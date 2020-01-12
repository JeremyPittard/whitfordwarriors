import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const FullSPonsors = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => {
                    // let i = index + 1;
                    // let delay = i < 4 ? `${i}00` : `${i - 3}00`;

                    console.log(post.frontmatter.logo);
                    return (
                        <>
                            <div className="is-parent column is-12" key={post.id}>
                                <a href={post.frontmatter.website} className="is-child" target="_blank" rel="noopener noreferrer">
                                    <article>
                                        <img src={post.frontmatter.logo.childImageSharp.fixed.src} alt={post.frontmatter.title} />
                                        <h3>{post.frontmatter.title}</h3>
                                    </article>
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
        query FullSPonsorsQuery {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "sponsor-post" } } }) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            templateKey
                            isMajor
                            logo {
                                childImageSharp {
                                    fixed(width: 150) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                            website
                        }
                    }
                }
            }
        }
    `);
    return <FullSPonsors data={data} />;
};
export default Posts;
