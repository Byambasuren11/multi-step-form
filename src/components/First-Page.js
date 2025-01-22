import { useState } from "react";

const First = () => {
  const [firstNamesValue, setFirstNamesValue] = useState([]);
  const [secondNamesValue, setSecondNamesValue] = useState([]);
  const [userNamesValue, setUserNamesValue] = useState([]);
  const [error, setError] = useState();
  const onClick = () => {
    if (firstNamesValue.length == 0) {
      setError({ firstName: "Enter first name" });
    }
    if (secondNamesValue.length == 0) {
      setError({ secondName: "Enter second name" });
    }
    if (userNamesValue.length == 0) {
      setError({ userName: "Enter user name" });
    }
    setError("");
  };
  const firstNameChanged = (e) => {
    setFirstNamesValue(e.target.value);
  };
  const secondNameChanged = (e) => {
    setSecondNamesValue(e.target.value);
  };
  const userNameChanged = (e) => {
    setUserNamesValue(e.target.value);
  };
  console.log(firstNamesValue);
  return (
    <>
      <div className="flex flex-col gap-10 mt-6">
        <div className=" flex flex-col gap-2">
          <p>First name</p>
          <input
            value={firstNamesValue}
            onChange={firstNameChanged}
            className=" w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your first name"
          />
          {error && error.firstName && (
            <div className="text-red-500">{error.firstName}</div>
          )}
        </div>
        <div className=" flex flex-col gap-2">
          <p>Last name</p>
          <input
            value={secondNamesValue}
            onChange={secondNameChanged}
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your last name"
          />
          {error && error.firstName && (
            <div className="text-red-500">{error.secondName}</div>
          )}
        </div>
        <div className=" flex flex-col gap-2">
          <p>User name</p>
          <input
            value={userNamesValue}
            onChange={userNameChanged}
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your username"
          />
          {error && error.firstName && (
            <div className="text-red-500">{error.userName}</div>
          )}
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
