import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="adobe-fonts"
      rel="stylesheet"
      href="https://use.typekit.net/rbc2vlb.css"
    />,
    <script
      key="netlify-identity-widget"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
  ])
}