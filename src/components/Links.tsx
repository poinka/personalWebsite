import React from 'react'
import ghImg from '../images/github-logo.png'
import tgImg from '../images/telegram-logo.png'
import emailImg from '../images/gmail-logo.png'

class Links extends React.Component {
  render() {
    return (
      <h2 className="links">
        Links:
        <a id="gh-link" href="https://github.com/poinka">
          {' '}
          <img alt="gh_img" src={ghImg} className="icons" />{' '}
        </a>
        <a id="tg-link" href="https://t.me/poinkaa">
          {' '}
          <img alt="tg_img" src={tgImg} className="icons" />{' '}
        </a>
        <a id="email" href="mailto:pkorobejnikova425@gmail.com">
          {' '}
          <img alt="email_img" src={emailImg} className="icons" />{' '}
        </a>
      </h2>
    )
  }
}

export default Links
