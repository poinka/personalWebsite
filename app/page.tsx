import Bio from "./components/Bio";
import Links from "./components/Links";

export default function Home() {
  return (
    <main>
      <div className="block-line">
        <div className="block-column">
          <div>
            <img
              className="main-photo"
              src="mainPhoto.png"
              alt="main photo"
              width={1000}
              height={1000}
            />
          </div>
          <Links />
        </div>
        <Bio />
      </div>
    </main>
  );
}
