import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const SponsorsRoll = props => {
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
                                <a href={post.frontmatter.website} className="tile c-tile is-child box" target="_blank">
                                    <article>
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: ` ${post.frontmatter.title}`,
                                                class: `full-width-image`
                                            }}
                                        />
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
        query SponsorsRollQuery {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { isMajor: { eq: true } } }) {
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
                            website
                            logo {
                                childImageSharp {
                                    fluid(maxWidth: 200, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return <SponsorsRoll data={data} />;
};
export default Posts;
