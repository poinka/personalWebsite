import React from "react";
import type { Metadata } from "next";

interface IComic {
  safe_title: string;
  img: string;
  alt: string;
  year: number;
  month: number;
  day: number;
}
export const metadata: Metadata = {
  title: "Comic",
  description: "Here you can find the comic.",
};

const ComicPage: React.FC = async () => {
  let comic: IComic | null = null;

  try {
    const email: string = "p.korobeinikova@innopolis.university";
    const emailParam: URLSearchParams = new URLSearchParams({ email });
    const urlId: string = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`;

    const comicIdResponse = await fetch(urlId);

    const url: string = `https://fwd.innopolis.university/api/comic?id=${await comicIdResponse.json()}`;
    const comicDataResponse = await fetch(url);

    comic = await comicDataResponse.json();
  } catch (error) {
    console.error("Error fetching comic data:", error);
  }

  if (!comic) {
    return <div className="block-comic">Loading...</div>;
  }

  const date = new Date(comic.year, comic.month - 1, comic.day);
  return (
    <div className="block-comic" >
      <h2>Title: {comic.safe_title}</h2>
      <img
        className="main-photo"
        src={comic.img}
        alt={comic.alt}
        width={1000}
        height={1000}
      />
      <h2>Date: {date.toLocaleDateString()}</h2>
    </div>
  );
};

export default ComicPage;
