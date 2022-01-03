import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/connect.module.scss"
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
              <a href={`https://killyourgod.ai/`}>
                SHOP
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://instagram.com/${infoData.contact.instagram_handle}`}>
                INSTAGRAM
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://discord.gg/${infoData.contact.discord_handle}`}>
                DISCORD
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://reddit.com/${infoData.contact.reddit_handle}`}>
                REDDIT
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                TWITTER
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://rarible.com/${infoData.contact.rarible_handle}`}>
                RARIBLE
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://opensea.io/${infoData.contact.opensea_handle}`}>
                OPENSEA
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://soundcloud.com/${infoData.contact.soundcloud_handle}`}>
                SOUNDCLOUD
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://youtube.com/${infoData.contact.youtube_handle}`}>
                YOUTUBE
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://depop.com/${infoData.contact.depop_handle}`}>
                DEPOP
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>
                CONTACT
              </a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
