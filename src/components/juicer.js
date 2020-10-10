import React, { useEffect } from "react";

const JuicerFeed = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.juicer.io/embed.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ul className="juicer-feed" data-feed-id="398840626962300" data-per='3' data-columns='3' data-truncate='75'>
    </ul>
  );
};

export default JuicerFeed;
