import * as React from "react"
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Due date / baby age
          <input type="text" name="babyDetails" />
        </label>

        <label>
          Message
          <textarea name="message" rows="6" required />
        </label>

        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}