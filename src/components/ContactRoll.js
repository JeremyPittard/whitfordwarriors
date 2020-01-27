import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const ContactList = props => {
    const { data } = props;
    const { edges: contacts } = data.allMarkdownRemark;
    return (
        <div className="columns is-multiline">
            {contacts &&
                contacts.map(({ node: contact }, index) => (
                    <>
                        <div className="is-parent column is-4" key={`contact-${index}`}>
                            <article>
                                <h3>{contact.frontmatter.title}</h3>
                            </article>
                        </div>
                    </>
                ))}
        </div>
    );
};

const Contacts = () => {
    const data = useStaticQuery(graphql`
        query ContactListQuery {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "contact-post" } } }) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            templateKey
                            name
                            email
                            number
                        }
                    }
                }
            }
        }
    `);
    return <ContactList data={data} />;
};
export default Contacts;
