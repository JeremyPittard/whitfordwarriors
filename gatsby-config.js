module.exports = {
    siteMetadata: {
        title: "Whitford Warriors Football and Netball Club",
        description: "The Whitford Warriors are an amateur football and netball club based in Padbury, in the Northern Suburbs of Perth. "
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-leaflet",
            options: {
                linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
            }
        },
        {
            resolve: "gatsby-plugin-transition-link",
            options: {
                layout: require.resolve(`./src/components/Layout.js`)
            }
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint: "https://whitfordafc.us12.list-manage.com/subscribe/post?u=541768944af1bffb0bbb9190e&amp;id=86af9a9411"
            }
        },{
            resolve: "gatsby-plugin-sass",
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-polyfill-io",
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048
                        }
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static"
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
        {
            resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ["all.sass", "../styles/main.scss"] // applies purging only on the bulma css file
            }
        }, // must be after other CSS plugins
        "gatsby-plugin-netlify" // make sure to keep it last in the array
    ]
};
