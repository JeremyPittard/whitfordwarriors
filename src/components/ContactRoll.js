import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const ContactList = props => {
    const { data } = props;
    const { edges: contacts } = data.allMarkdownRemark;
    return (
        <section className={"map-section__contacts-list"}>
            <h1 className={"is-size-1 has-text-centered"}>Club Contacts</h1>
            <div className="container">
                <div className="columns is-parent is-multiline">
                    {contacts &&
                        contacts.map(({ node: contact }, index) => (
                            <>
                                <div className={"column is-4"}>
                                    <ul key={`contact-${index}`}>
                                        <li className={"map-section__contact"}>
                                            <h3 className={"is-size-5"}>
                                                <strong>{contact.frontmatter.title}:</strong> {contact.frontmatter.name}
                                            </h3>
                                        </li>
                                        {contact.frontmatter.number && <li>Phone: {contact.frontmatter.number}</li>}
                                        {contact.frontmatter.email && <li>Email: {contact.frontmatter.email}</li>}
                                    </ul>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </section>
    );
};

const Contacts = () => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "contact-post" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            name
                            number
                            email
                            templateKey
                        }
                    }
                }
            }
        }
    `);
    return <ContactList data={data} />;
};
export default Contacts;
