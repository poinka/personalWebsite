
export default function Links() {
    return (
      <div className="links-container">
        <h2 className="links-title">Links:</h2>
        <div className="links">
          <a id="gh-link" href="https://github.com/poinka" target="_blank" rel="noopener noreferrer">
            <img alt="gh_img" src="/github-logo.png" className="icons" />
          </a>
          <a id="tg-link" href="https://t.me/poinkaa" target="_blank" rel="noopener noreferrer">
            <img alt="tg_img" src="/telegram-logo.png" className="icons" />
          </a>
          <a id="email" href="mailto:pkorobejnikova425@gmail.com">
            <img alt="email_img" src="/gmail-logo.png" className="icons" />
          </a>
        </div>
      </div>
    )
  }