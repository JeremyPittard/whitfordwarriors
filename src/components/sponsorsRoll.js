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
                    console.log(post.frontmatter.logo);
                    return (
                        <>
                            <div className="is-parent column is-4" key={post.id}>
                                <a href={post.frontmatter.website} className="tile c-tile is-child box" target="_blank" rel="noopener noreferrer">
                                    <article>
                                        {index + 1}
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.logo,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                class: `full-width-image`
                                            }}
                                        />
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
                            templateKey
                            isMajor
                            logo {
                                childImageSharp {
                                    fluid(maxWidth: 200, quality: 100) {
                                        ...GatsbyImageSharpFluid
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
    return <SponsorsRoll data={data} />;
};
export default Posts;
