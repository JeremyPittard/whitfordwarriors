import React, { useState } from "react";
import addToMailChimp from "gatsby-plugin-mailchimp";

export const WomensMailchimpSubscribe = () => {
    const [email, setEmail] = useState(null);
    const [valid, setValid] = useState(false);

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

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
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="email" placeholder="email" name="email" onChange={e => handleChange(e)} />
            <input type="submit" />
        </form>
    );
};
