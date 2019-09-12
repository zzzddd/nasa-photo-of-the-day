import React from "react";

const PhotoCard = props => {
  return (
    <div className="film-list " key={props.id}>
      <h2>Camera Used: {props.title}</h2>
      {/* <p>{props.description}</p> */}
      <p>Landing Date: {props.director}</p>
      <p>Release date: {props.release_date}</p>
      <img alt="random mars" src={props.description} />
    </div>
  );
};
export default PhotoCard;
