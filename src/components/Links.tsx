import React from 'react'
import ghImg from './img/ghImg.png'
import tgImg from './img/telegram-logo-black-and-white_1677484911374-1677484912675.png'
import emailImg from './img/Gmail-PNG-File-Download-Free.png'

class Links extends React.Component {
  render() {
    return (
      <h2>
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
