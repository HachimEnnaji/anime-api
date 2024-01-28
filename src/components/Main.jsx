import React, { useEffect, useState } from "react";
import Anime from "./Anime";
import { Row } from "react-bootstrap";

function Main() {
  const [anime, setAnime] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/top/anime");
      if (!response.ok) {
        throw new Error("errore nella chiamata api");
      }
      const data = await response.json();
      setAnime(data.data);
      console.log("hello", anime);
    } catch (error) {
      console.log("errore nel reperimento dati", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [anime]);
  return (
    <>
      <Row xs={4} className="gx-2 mx-2 px-2">
        {anime.map((movie, index) => (
          <Anime key={`anime-${index}`} anime={movie} />
        ))}
      </Row>
    </>
  );
}

export default Main;
