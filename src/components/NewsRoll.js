import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const NewsRoll = props => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => (
                    <div className={index < 1 ? "is-parent column is-12" : "is-parent column is-4"} key={post.id}>
                        <article className="blog-list-item tile is-child box notification ">
                            <header>
                                {post.frontmatter.featuredimage ? (
                                    <div className="featured-thumbnail">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`
                                            }}
                                        />
                                    </div>
                                ) : null}
                                <p className="post-meta">
                                    <Link className="title has-text-primary is-size-4 is-block" to={post.fields.slug}>
                                        {post.frontmatter.title}
                                    </Link>

                                    <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
                                </p>
                            </header>
                            <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <Link className="button" to={post.fields.slug}>
                                    Keep Reading →
                                </Link>
                            </p>
                        </article>
                    </div>
                ))}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query NewsRollQuery {
            allMarkdownRemark(limit: 1, sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "post" } } }) {
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
    return <NewsRoll data={data} />;
};
export default Posts;
