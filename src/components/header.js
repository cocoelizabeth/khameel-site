import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">Khameel Simon</Link>
        <nav>
          <Link to="/about">About</Link> {" "}
          <Link to="/services">Services</Link> {" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

