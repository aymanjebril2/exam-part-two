import React, { useState, useEffect } from "react";
import axios from "axios";
import Breed from "./Breed";

const ListOfBreed = () => {
  const [list, setList] = useState([]);

  const fatchList = async () => {
    let url = "https://api.thedogapi.com/v1/breeds";
    let response = await axios.get(url).then((res) => {
      setList(res.data);
    });
  };
  console.log(list);
  useEffect(() => {
    fatchList();
  }, []);

  return (
    <div className="listofdog">
      {list.map((item, index) => {
        return <Breed key={index} {...item} />;
      })}
    </div>
  );
};

export default ListOfBreed;
