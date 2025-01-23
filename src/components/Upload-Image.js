import React, { useState } from "react";
import Remove from "./Remove-Button";
const Product = (props) => {
  const { id, onChange, setPicture } = props;
  const [file, setFile] = useState([]);

  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    onChange(URL.createObjectURL(event.target.files[0]));
  };
  const onClick=()=>{
    setFile([]);
    setPicture(false);
  }
  return (
    <>
    <div className="relative">

      <img src={file}/>
    <div className="absolute top-10 right-3 cursor-pointer" onClick={onClick}>
      <Remove/>
    </div>
    </div>
      <input id={id} hidden type="file" onChange={handleFile}></input>
    </>
  );
};

export default Product;
