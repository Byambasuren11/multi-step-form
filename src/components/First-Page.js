import { useEffect, useState } from "react";
import { motion } from "motion/react"
import Header from "./Header";
const First = (props) => {
  const { setPage } = props;
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});

  const onClick = () => {

    if (!formValue.firstName) {
      setError((prev) => ({ ...prev, firstName: "Enter first name" }));
    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
    }
    if (!formValue.secondName) {
      setError((prev) => ({ ...prev, secondName: "Enter second name" }));
    } else {
      setError((prev) => ({ ...prev, secondName: "" }));
    }
    if (!formValue.userName) {
      setError((prev) => ({ ...prev, userName: "Enter user name" }));
    } else {
      setError((prev) => ({ ...prev, userName: "" }));
    }
    console.log("hdcf", error);

    if (
      error.firstName == "" &&
      error.secondName == "" &&
      error.userName == ""
    ) {
      setPage(2);
      localStorage.setItem("stepOne", JSON.stringify(formValue));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("stepOne");
    setFormValue(JSON.parse(data) || {});
  }, []);

  const firstNameChanged = (e) => {
    setFormValue({ ...formValue, firstName: e.target.value });
  };

  const secondNameChanged = (e) => {
    setFormValue({ ...formValue, secondName: e.target.value });
  };
  const userNameChanged = (e) => {
    setFormValue({ ...formValue, userName: e.target.value });
  };
  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center h-screen w-full bg-gray-200"
        animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
      >
        <div className=" bg-white h-fit w-[480px] p-10 rounded-xl flex flex-col gap-6">
          <Header />
          <div className="flex flex-col gap-4 mt-1 h-fit">
            <div className=" flex flex-col ">
              <p>First name</p>
              <input
                onChange={firstNameChanged}
                value={formValue?.firstName || ""}
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
        </div>
      </motion.div>
    </>
  );
};
export default First;
