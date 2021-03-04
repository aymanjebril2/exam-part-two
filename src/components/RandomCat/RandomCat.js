import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomCat = () => {
  const [cat, setCat] = useState([]);

  const fatchCat = async () => {
    let url = "https://api.thecatapi.com/v1/images/search";
    let response = await axios.get(url).then((res) => {
      setCat(res.data[0].url);
    });
    return response;
  };
  console.log(cat);
  useEffect(() => {
    fatchCat();
  }, []);

  return (
    <div>
      <button className="btn" onClick={fatchCat}>
        get random cat{" "}
      </button>
      <br></br>
      <img src={cat} alt="random cat" />
    </div>
  );
};

export default RandomCat;
