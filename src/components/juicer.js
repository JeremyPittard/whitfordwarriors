import React, { useEffect } from "react";

const JuicerFeed = () => {

  useEffect(() => {
    const script = document.createElement("script");
    const css = document.createElement("link");

    script.src = "https://assets.juicer.io/embed.js";
    css.href = "https://assets.juicer.io/embed.css";
    css.media = "all";
    css.rel = "stylesheet";
    css.type = "text/css";
    script.async = true;

    document.head.append(css);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ul class="juicer-feed" data-feed-id="398840626962300" data-per='3' data-columns='3' data-truncate='125'>
    </ul>
  );
};

export default JuicerFeed;
