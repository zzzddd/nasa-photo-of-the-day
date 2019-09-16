import React from "react";
import styled from "styled-components";
import { Card, Img, Title, Description } from "./card";
import { Spinner,Progress } from "reactstrap";
const PhotoCard = props => {
  return (
    <div className="film-list " key={props.id}>
      <Progress color="success" value="100">
        You did it!
      </Progress>
      <Title>Camera Used: {props.title}</Title>
      {/* <p>{props.description}</p> */}
      <Description>Landing Date: {props.director}</Description>
      <Description>Release date: {props.release_date}</Description>
      <Img alt="random mars" src={props.description} />
    </div>
  );
};
export default PhotoCard;

