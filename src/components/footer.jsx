import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.mayanksuman.dev" target="blank">
        Mayank Suman
      </a>
      .
    </footer>
  )
}

export default Footer
