import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Colours from "../utils/colours";
import SponsorsRoll from "../components/sponsorsRoll";
import LogoSVG from "../utils/logoSVG";
import LeafletMap from "../components/LeafletMap";
import JuicerFeed from '../components/juicer';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
  hideImage,
}) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    gsap.set(".intro-blurb", { autoAlpha: 0, y: 10 });

    gsap.to(".intro-blurb", {
      scrollTrigger: { 
          trigger: ".intro-blurb",
          start: 'top 85%',
         },
      y: 0,
      autoAlpha: 1,
    });
  }, []);

  return (
    <div>
      <div
        className="full-width-image full-width-image-fix"
        style={{
          backgroundImage: hideImage
            ? ""
            : `url(${
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              })`,
          backgroundColor: Colours.blue,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LogoSVG />
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
            style={{
              backgroundColor: Colours.blue,
              color: "white",
              padding: "0.25em",
            }}
          >
            {title}
          </h1>
          <h2
            className="has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              backgroundColor: Colours.blue,
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {subheading}
          </h2>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content intro-blurb">
                    <div className="tile">
                      <h1 className="title blue-text ">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle blue-text">
                        {mainpitch.description}
                      </h3>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 blue-text">
                      What's happening around the club
                    </h3>
                    <JuicerFeed />
                    <BlogRoll />
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 blue-text">
                      Our Friends
                    </h3>
                    <SponsorsRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {typeof window !== "undefined" && (
          <LeafletMap
            position={[-31.804494, 115.756956]}
            zoom={16}
            markerText={
              "Whitford Warriors Football and Netball Club is located on the corner of Forrest road and Marmoin Avenue in Padbury "
            }
          />
        )}
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  hideImage: PropTypes.bool,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <IndexPageTemplate
        image={frontmatter.image}
        hideImage={frontmatter.hideImage}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hideImage
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`;
