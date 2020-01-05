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
                    <>
                        <div className="is-parent column is-4" key={post.id}>
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
                                    <p className="subtitle">
                                        {post.frontmatter.date} {post.fields.slug}
                                    </p>
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
        query NewsRollQuery {
            allMarkdownRemark(limit: 10, sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "post" } } }) {
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
                                    fluid(maxWidth: 720, quality: 100, traceSVG: { color: "#3e4189" }) {
                                        ...GatsbyImageSharpFluid_tracedSVG
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
