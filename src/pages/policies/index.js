import React from "react";
import Colours from "../../utils/colours";

import PolicyRoll from "../../components/policyRoll";

const PolicyPage = () => {
  return (
    <>
      <div
        className="full-width-image-container margin-top-0 filtered"
        style={{
          backgroundImage: `url('/img/policies.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            backgroundColor: Colours.blue,
            color: "white",
            padding: "1rem",
          }}
        >
          Club Policies
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <PolicyRoll />
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
