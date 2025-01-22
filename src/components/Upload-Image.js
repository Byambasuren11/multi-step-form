import React, { useState } from "react";
function Product() {
  const [file, setFile] = useState([]);

  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <div>
        <img src={file} />
        <input type="file" onChange={handleFile}></input>
      </div>
    </>
  );
}

export default Product;
