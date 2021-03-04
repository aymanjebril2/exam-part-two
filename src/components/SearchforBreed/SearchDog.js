import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchDog = () => {
  const [breed, setBreed] = useState([]);
  const [trem, setTrem] = useState("");

  const fatchBreed = async () => {
    // let url = `https://dog.ceo/api/breed/${trem}/images`;
    let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${trem}`;
    let response = await axios.get(url).then((res) => {
      console.log(res.data);
      setBreed(res.data);
    });
    return response;
  };
  console.log(trem);

  useEffect(() => {
    fatchBreed();
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setTrem(e.target.value)} />
      <button onClick={fatchBreed}> seach</button>
      <img src={breed.image} alt="search for cat" />
    </div>
  );
};

export default SearchDog;
