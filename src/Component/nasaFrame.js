import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./nasaCard";
import styled from "styled-components";
import { Card, Img, Title, Description } from "./card"
const Display = styled.section`
  display: flex;
  flex-direction: column;
`;


const Male = styled(Card)`
  color: black;
  border: 3px solid black;
  box-shadow: 20px 20px;
`;


export default function PhotoList() {
  // NOTE: The value given to useState() must be of the same type as your vale is expected to be
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
       .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
      .then(response => {
        const photo = response.data.photos;
        console.log("Recent Photos from Marse", photo);
        setPhoto(photo);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      <Display>
        {photo.map(photo => {
          return (
            <Male>
              <PhotoCard
                key={photo.id}
                title={photo.camera.full_name}
                description={photo.img_src}
                director={photo.rover.landing_date}
                release_date={photo.earth_date}
                // {pets.map(image => {
                //   return <PetCard key={image} breed={breed} imgUrl={image} />;
                // })}
              />
            </Male>
          );
        })}
      </Display>
    </div>
  );
}


