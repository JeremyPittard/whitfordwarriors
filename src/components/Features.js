import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const FeatureGrid = ({ gridItems }) => {
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
      {gridItems.map((item, index) => {
        return (
          <div key={item.text} className="column is-6 blurb-section blog-card">
            <section className="section">
              <div className="has-text-centered">
                <div
                  style={{
                    width: "240px",
                    display: "inline-block",
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p>{item.text}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
