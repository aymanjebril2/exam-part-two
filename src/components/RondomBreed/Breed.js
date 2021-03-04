import React from "react";

const Breed = ({ bred_for, breed_group, image, name, origin }) => {
  return (
    <div>
      <h2> breed for :{bred_for}</h2>
      <h2> breed group:{breed_group}</h2>
      <img src={image.url} alt="dog breeds" />
      <h2>name:{name}</h2>
      <h2> origin :{origin}</h2>
    </div>
  );
};

export default Breed;
