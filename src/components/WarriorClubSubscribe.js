import React, { useState } from "react";
import addToMailChimp from "gatsby-plugin-mailchimp";
import { add } from "lodash";

export const ClubMailchimpSubscribe = () => {
  const [email, setEmail] = useState(null);
  const [fName, setFName] = useState(null);
  const [lName, setLName] = useState(null);
  const [addy, setAddy] = useState(null);
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    e.target.name == "email" && setEmail(e.target.value);
    e.target.name == "fname" && setFName(e.target.value);
    e.target.name == "lname" && setLName(e.target.value);
    e.target.name == "addy" && setAddy(e.target.value);

  };

  const handleValid = () => {
    setValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      addToMailChimp(email, {
        // TODO when campaign goes live uncomment to segment
        // MMERGE6: "Warriors Club",
        FNAME: fName,
        LNAME: lName,
        ADDY: addy,
      })
        .then(({ msg, result }) => {
          console.log("msg", `${result}: ${msg}`);

          if (result !== "success") {
            throw msg;
          }
        })
        .catch((err) => {
          console.log("err", err);
          alert(err);
        });
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="has-text-left">
      <h4 className="white-text">Subscribe to our Newsletter</h4>
      <div className="input-wrapper">
        <label htmlFor="email">First Name</label>

        <input type="text" name="fname" onChange={(e) => handleChange(e)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Last Name</label>

        <input type="text" name="lname" onChange={(e) => handleChange(e)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Mailing Address - use if you would prefer physical mail</label>

        <input type="text" name="addy" onChange={(e) => handleChange(e)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e) => handleChange(e)} />
      </div>

      <input
        type="text"
        placeholder="name"
        className="name"
        onChange={handleValid}
      />
      <input type="submit" className="submit" />
    </form>
  );
};
