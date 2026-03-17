import * as React from "react"
import Header from "./header"

export default function Layout({ children }) {
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user && window.location.hash.includes("invite_token")) {
          window.netlifyIdentity.open("signup")
        }
      })

      window.netlifyIdentity.on("login", () => {
        window.location.href = "/admin/"
      })
    }
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}