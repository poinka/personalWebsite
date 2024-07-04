import React from "react";
import axios from "axios";

interface IComic {
  safe_title: string;
  img: string;
  alt: string;
  year: number;
  month: number;
  day: number;
}

const ComicPage: React.FC = async () => {
  let comic: IComic | null = null;

  try {
    const email: string = "p.korobeinikova@innopolis.university";
    const emailParam: URLSearchParams = new URLSearchParams({ email });
    const urlId: string = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`;

    const comicIdResponse = await axios.get(urlId);
    //console.log("First API request:", comicIdResponse);

    const url: string = `https://fwd.innopolis.university/api/comic?id=${comicIdResponse.data}`;
    const comicDataResponse = await axios.get(url);
    //console.log("Second API request:", comicDataResponse);

    comic = comicDataResponse.data;
  } catch (error) {
    console.error("Error fetching comic data:", error);
  }

  if (!comic) {
    return <div className="block-comic">Loading...</div>;
  }

  const date = new Date(comic.year, comic.month - 1, comic.day);
  return (
    <div className="block-comic">
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
