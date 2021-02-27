import React, {useEffect} from "react";
import { graphql, useStaticQuery } from "gatsby";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export const FullSPonsors = (props) => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    useEffect(() => {
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
                    // let i = index + 1;
                    // let delay = i < 4 ? `${i}00` : `${i - 3}00`;

                    return (
                        <div className="is-parent column is-4 blog-card" key={post.id}>
                            <a href={post.frontmatter.website} className="is-child sponsor" target="_blank" rel="noopener noreferrer">
                                <article>
                                    <img src={post.frontmatter.logo.childImageSharp.fixed.src} alt={post.frontmatter.title} />
                                    <h3>{post.frontmatter.title}</h3>
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
        query FullSPonsorsQuery {
            allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___priority] }, filter: { frontmatter: { templateKey: { eq: "sponsor-post" } } }) {
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
                            priority
                        }
                    }
                }
            }
        }
    `);
    return <FullSPonsors data={data} />;
};
export default Posts;
