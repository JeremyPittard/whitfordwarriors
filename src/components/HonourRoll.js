import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Colours from "../utils/colours";

export const HonourRoll = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="columns is-multiline honour-roll">
            {posts &&
                posts.map(({ node: post }, index) => (
                    <>
                        <div className="is-parent column is-4" key={`event-${index}`}>
                            <AniLink direction="down" duration={0.7} cover bg={Colours.blue} to={post.fields.slug} className="tile c-tile is-child box honour-link ">
                                <article>
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                            image: post.frontmatter.featuredimage,
                                            alt: `Icon for ${post.frontmatter.title}`,
                                            class: `honour-icon`,
                                        }}
                                    />
                                    <h3>{post.frontmatter.title}</h3>
                                </article>
                            </AniLink>
                        </div>
                    </>
                ))}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query HonourRollQuery {
            allMarkdownRemark(limit: 50, sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "board-post" } } }) {
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
                            date(formatString: "MMMM DD, YYYY")
                            eventDate(formatString: "MMMM DD, YYYY")
                            featuredimage {
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
    return <HonourRoll data={data} />;
};
export default Posts;
