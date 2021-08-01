import React, {useEffect} from "react";
import { graphql, useStaticQuery } from "gatsby";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export const SponsorsRoll = (props) => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    useEffect(() => {
        if (typeof document === "undefined") return;

        gsap.set(".blog-card", { autoAlpha: 0, y: 10 });
    
        ScrollTrigger.batch(".blog-card", {
          interval: 0.1, // time window (in seconds) for batching to occur.
          batchMax: 3, // maximum batch size (targets). Can be function-based for dynamic values
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: { each: 0.15, grid: [1, 3] },
              overwrite: true,
            }),
          start: "top 85%",
        });
    
        ScrollTrigger.addEventListener("refreshInit", () =>
          gsap.set(".box", { y: 0 })
        );
      }, []);

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }, index) => {
                    return (
                        <div className="is-parent column is-4 blog-card" key={`sponsor-${post.id}`}>
                            <a href={post.frontmatter.website} className="sponsor is-child" target="_blank" rel="noopener noreferrer">
                                <article>
                                    <img src={post.frontmatter.logo.childImageSharp.fixed.src} alt={post.frontmatter.title} />
                                </article>
                            </a>
                        </div>
                    );
                })}
        </div>
    );
};

const Posts = () => {
    const data = useStaticQuery(graphql`
        query SponsorsRollQuery {
            allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___priority] }, filter: { frontmatter: { isMajor: { eq: true } } }) {
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
    return <SponsorsRoll data={data} />;
};
export default Posts;
