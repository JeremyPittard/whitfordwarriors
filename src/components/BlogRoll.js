import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Colours from "../utils/colours";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export const BlogRoll = (props) => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        else {

            
            gsap.set('.blog-card', {autoAlpha: 0, y: 10})
            
            ScrollTrigger.batch(".blog-card", {
                interval: 0.1, // time window (in seconds) for batching to occur. 
                batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
                onEnter: batch => gsap.to(batch, {autoAlpha: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
                start: "top 85%",
            });
            
            ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", {y: 0}));
        }
    }, [])

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => {
                    // let i = index + 1;
                    // let delay = i < 4 ? `${i}00` : `${i - 3}00`;
                    return (
                        <div className="is-parent column is-4 blog-card" key={`b-${index}`}>
                            <AniLink cover direction="down" duration={0.7} bg={Colours.blue} to={post.fields.slug} className="tile c-tile is-child box">
                                <article>
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                            image: post.frontmatter.featuredimage,
                                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                            class: `full-width-image`,
                                        }}
                                    />
                                    <h3>{post.frontmatter.title}</h3>
                                    {post.frontmatter.eventDate ? (
                                        <p className="subtitle blue-text is-size-7">event on: {post.frontmatter.eventDate}</p>
                                    ) : (
                                        <p className="subtitle blue-text is-size-7">published on: {post.frontmatter.date}</p>
                                    )}
                                </article>
                            </AniLink>
                        </div>
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
