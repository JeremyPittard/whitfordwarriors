import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const EventsRoll = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => (
                    <>
                        <div className="is-parent column is-4" key={`event-${index}`}>
                            <Link to={post.fields.slug} className="tile c-tile is-child box ">
                                <article>
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                            image: post.frontmatter.featuredimage,
                                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                            class: `full-width-image`
                                        }}
                                    />
                                    <h3>{post.frontmatter.title}</h3>
                                    <p className="subtitle blue-text is-size-7">Event on: {post.frontmatter.eventDate}</p>
                                </article>
                            </Link>
                        </div>
                    </>
                ))}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query EventsRollQuery {
            allMarkdownRemark(limit: 10, sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "event-post" } } }) {
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
                            featuredpost
                            featuredimage {
                                childImageSharp {
                                    fluid(maxWidth: 720, quality: 100) {
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
    return <EventsRoll data={data} />;
};
export default Posts;
