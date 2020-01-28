import React, { useState } from "react";
import addToMailChimp from "gatsby-plugin-mailchimp";

export const WomensMailchimpSubscribe = () => {
    const [email, setEmail] = useState(null);
    const [valid, setValid] = useState(true);

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleValid = () => {
        setValid(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (valid) {
            addToMailChimp(email, {
                MMERGE6: "Womens Footy"
            })
                .then(({ msg, result }) => {
                    console.log("msg", `${result}: ${msg}`);

                    if (result !== "success") {
                        throw msg;
                    }
                })
                .catch(err => {
                    console.log("err", err);
                    alert(err);
                });
        } else {
            console.log("something went wrong");
        }
    };

    return (
        <form onSubmit={e => handleSubmit(e)} className="has-text-left">
            <h4 className="white-text">Subscribe to our Newsletter</h4>
            <div className="input-wrapper">
                <label htmlFor="email">Please enter your email</label>
                <input type="email" name="email" onChange={e => handleChange(e)} />
            </div>
            <input type="text" placeholder="name" className="name" onChange={handleValid} />
            <input type="submit" className="submit" />
        </form>
    );
};
