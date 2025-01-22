import { useState } from "react";
import moment from "moment";


import Product from "./Upload-Image";
import { Agbalumo } from "next/font/google";

const Third = (props) => {
    const {setPage}=props
  const [age, setAge] = useState("");
  const [error, setError] = useState({});
  const [ageCal,setAgeCal]=useState()

  const calculateAge = (e) => {
    setAge(event.target.value);
  };
  const onClick = () => {
      let ago=(moment(age, "YYYYMMDD").fromNow()).split(" ");
    if (!age) {
      setError((prev) => ({ ...prev, age: "Enter age" }));
    }
    else if(Number (ago[0])<18){
        setError((prev) => ({ ...prev, age: "Enter correct age" }));
    }
    setPage(4);
    console.log(Number(ago[0]));
  };
  const onClickBack=()=>{
    setPage(2);
  }
  return (
    <>
      <div>
        <div>Date Of Birth</div>
        <input
          className="w-full p-3 border border-gray-500 rounded-lg"
          type="date"
          onChange={calculateAge}
        />
        {error.age ? <p className="text-red-500">{error.age}</p> : <></>}
      </div>
      <div>
        <div>Profile Image</div>
        <Product />
      </div>
      <div className="flex gap-3 ">
        <button className="px-5 py-3.5 bg-white text-black rounded-lg mb-6 w-[200px] border-black border-solid border-1" onClick={onClickBack}>
          Back
        </button>
        <button
          className="px-5 py-3.5 bg-black text-white rounded-lg mb-6 w-[200px]"
          onClick={onClick}
        >
          Continue 2/3
        </button>
      </div>
    </>
  );
};
export default Third;
