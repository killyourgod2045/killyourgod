import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.info_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
          <div dangerouslySetInnerHTML={{__html: infoData.cta}}></div>
        </h2>
        <ul>
          <li>
            <p>
              <a href={`https://instagram.com/${infoData.contact.instagram_handle}`}>
                INSTAGRAM: @{infoData.contact.instagram_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://discord.gg/${infoData.contact.discord_handle}`}>
                DISCORD: {infoData.contact.discord_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://reddit.com/${infoData.contact.reddit_handle}`}>
                REDDIT: @{infoData.contact.reddit_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                TWITTER: @{infoData.contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>
                CONTACT: {infoData.contact.email}
              </a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
