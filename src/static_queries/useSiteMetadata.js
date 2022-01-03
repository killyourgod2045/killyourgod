import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              shop
              instagram_handle
              discord_handle
              reddit_handle
              twitter_handle
              rarible_handle
              opensea_handle
              soundcloud_handle
              youtube_handle
              depop_handle
              email
            }
            cta
            description
            background_color
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
