import React, { useState } from "react";
import LeafletMap from "../../components/LeafletMap";
import ContactList from "../../components/ContactRoll";
import Colours from "../../utils/colours";


const ContactPage = () => {
  const [ssValidated, setIsValidated] = useState(false);

  return (
    <>
      <div
        className="full-width-image-container margin-top-0 margin-bottom-0 filtered has-text-centered"
        style={{
          backgroundImage: `url('/img/news.png')`,
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
          Get In Touch
        </h1>
      </div>
      <section className="section map-section contact-page">
        <div className="map-container">
          {typeof window !== "undefined" && (
            <LeafletMap
              position={[-31.804494, 115.756956]}
              zoom={16}
              markerText={
                "Whitford Warriors Football and Netball Club is located on the corner of Forrest road and Marmoin Avenue in Padbury "
              }
            />
          )}
        </div>
        <div>
          <ContactList />
        </div>
      </section>
    </>
  );
};

export default ContactPage