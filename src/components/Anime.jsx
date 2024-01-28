import React from "react";
import { Button, Card } from "react-bootstrap";

function Anime(props) {
  console.log("la mia props", props.anime);
  return (
    <>
      {props ? (
        <Card className="mb-2 me-2">
          <Card.Img variant="top" src={props.anime.images.jpg.large_image_url} alt="anime image" />
          <Card.Body>
            <Card.Title>{props.anime.title}</Card.Title>
            <Card.Text>{props.anime.synopsis}</Card.Text>

            <Button variant="primary" href={props.anime.url} target="_blank">
              Check Anime
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <h3 className="text-center">Caricamento...</h3>
      )}
    </>
  );
}

export default Anime;
