module.exports = {
    siteMetadata: {
        title: 'Praveen Bisht',
        author: 'Praveen Bisht'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass', {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        `gatsby-transformer-sharp`, {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images', {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }, 
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                          classPrefix: "language-",
                          inlineCodeMarker: null,
                          aliases: {},
                          showLineNumbers: true,
                          noInlineHighlight: false,
                        },
                      },
                ]
            }
        }, {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.TRACK_ID,
                head: true
            }
        }
    ]
}