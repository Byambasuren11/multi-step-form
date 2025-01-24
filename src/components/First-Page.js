import { useEffect, useState } from "react";

const First = (props) => {
  const { setPage } = props;
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});

  const onClick = () => {
    console.log(formValue);
    
    if (!formValue.firstName) {
      setError((prev) => ({ ...prev, firstName: "Enter first name" }));
    }
    if (!formValue.secondName) {
      setError((prev) => ({ ...prev, secondName: "Enter second name" }));
    }
    if (!formValue.userName) {
      setError((prev) => ({ ...prev, userName: "Enter user name" }));
    }
    
    
    if (
      !error.userName &&
      !error.secondName &&
      !error.firstName 
    ) {
      setPage(2);
      localStorage.setItem("stepOne", JSON.stringify(formValue));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("stepOne");
    console.log(JSON.parse(data));
    setFormValue(JSON.parse(data) || {});
  }, []);

  const firstNameChanged = (e) => {
    setError((prev) => ({ ...prev, firstName: "" }));
    setFormValue({ ...formValue, firstName: e.target.value });
  };
  
  const secondNameChanged = (e) => {
    setError((prev) => ({ ...prev, secondName: "" }));
    setFormValue({ ...formValue, secondName: e.target.value });
  };
  const userNameChanged = (e) => {
    setError((prev) => ({ ...prev, userName: "" }));
    setFormValue({ ...formValue, userName: e.target.value });
  };
  return (
    <>
      <div className="flex flex-col gap-4 mt-1 h-fit">
        <div className=" flex flex-col ">
          <p>First name</p>
          <input
            onChange={firstNameChanged}
            value={formValue?.firstName || ''}
            className=" w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your first name"
          />
          {error.firstName ? (
            <div className="text-red-500">{error.firstName}</div>
          ) : (
            <></>
          )}
        </div>
        <div className=" flex flex-col gap-2">
          <p>Last name</p>
          <input
            onChange={secondNameChanged}
            value={formValue?.secondName || ""}
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your last name"
          />
          {error.secondName ? (
            <div className="text-red-500">{error.secondName}</div>
          ) : (
            <></>
          )}
        </div>
        <div className=" flex flex-col gap-2">
          <p>User name</p>
          <input
            onChange={userNameChanged}
            value={formValue?.userName || ""}
            className="w-full p-3 border border-gray-500 rounded-lg"
            placeholder="Your username"
          />
          {error.userName ? (
            <div className="text-red-500">{error.userName}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <button
        className="px-5 py-3.5 bg-black text-white rounded-lg mb-10"
        onClick={onClick}
      >
        Continue 1/3
      </button>
    </>
  );
};
export default First;
