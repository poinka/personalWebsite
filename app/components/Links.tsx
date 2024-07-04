import Image from "next/image";

export default function Links() {
  return (
    <div className="links-container">
      <h2 className="links-title">Links:</h2>
      <div className="links">
        <a
          id="gh-link"
          href="https://github.com/poinka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="gh_img"
            src="/github-logo.png"
            className="icons"
            width={1000}
            height={1000}
          />
        </a>
        <a
          id="tg-link"
          href="https://t.me/poinkaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="tg_img"
            src="/telegram-logo.png"
            className="icons"
            width={1000}
            height={1000}
          />
        </a>
        <a id="email" href="mailto:pkorobejnikova425@gmail.com">
          <Image
            alt="email_img"
            src="/gmail-logo.png"
            className="icons"
            width={1000}
            height={1000}
          />
        </a>
      </div>
    </div>
  );
}
