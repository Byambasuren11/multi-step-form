import { useState } from "react";

const First = () => {
  const [namesValue, setNamesValue] = useState([]);
  const [error, setError] = useState();
  const onClick = () => {};
  const c=(e)=>{
setNamesValue(e.target.value);
  }
  console.log(namesValue);
  return (
    <>
      <div className="flex flex-col gap-10 mt-6">
        <div className=" flex flex-col gap-2">
          <p>First name</p>
          <input
          value={namesValue}
          onChange={c}
            className=" w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your first name"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p>Last name</p>
          <input
            value={namesValue}
            onChange={c}
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your last name"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p>User name</p>
          <input
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your username"
          />
        </div>
        <button
          className="px-5 py-3.5 bg-black text-white rounded-lg"
          onClick={onClick}
        >
          Continue 1/3
        </button>
      </div>
    </>
  );
};
export default First;
