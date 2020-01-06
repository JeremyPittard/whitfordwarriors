import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const BlogRoll = props => {
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
                                <Link to={post.fields.slug} className="tile c-tile is-child box">
                                    <article>
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                class: `full-width-image`
                                            }}
                                        />
                                        <h3>{post.frontmatter.title}</h3>
                                        {post.frontmatter.eventDate ? (
                                            <p className="subtitle blue-text is-size-7">event on: {post.frontmatter.eventDate}</p>
                                        ) : (
                                            <p className="subtitle blue-text is-size-7">published on: {post.frontmatter.date}</p>
                                        )}
                                    </article>
                                </Link>
                            </div>
                        </>
                    );
                })}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query BlogRollQuery {
            allMarkdownRemark(limit: 6, sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "post" } } }) {
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
                            date(formatString: "Do MMM, YYYY")
                            eventDate(formatString: "Do MMM, YYYY")
                            featuredpost
                            featuredimage {
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 450, quality: 80) {
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
    return <BlogRoll data={data} />;
};
export default Posts;
