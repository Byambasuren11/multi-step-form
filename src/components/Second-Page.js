import { useState, useEffect } from "react";
import { motion } from "motion/react"
import Header from "./Header";

const Second = (props) => {
  const { setPage } = props;
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{8}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onClick = () => {
    if (!formValue.email) {
      setError((prev) => ({ ...prev, email: "Enter email name" }));
    } else if (formValue.email.search(emailRegex) === -1) {
      setError((prev) => ({ ...prev, email: "Enter correct email " }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
    if (!formValue.phone) {
      setError((prev) => ({ ...prev, phone: "Enter phone number" }));
    } else if (formValue.phone.search(phoneRegex) === -1) {
      setError((prev) => ({ ...prev, phone: "Enter correct phone number" }));
    } else {
      setError((prev) => ({ ...prev, phone: "" }));
    }
    if (!formValue.password) {
      setError((prev) => ({ ...prev, password: "Enter password" }));
    } else if (formValue.password.search(passwordRegex) == -1) {
      setError((prev) => ({ ...prev, password: "Enter correct password" }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
    if (!formValue.confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: "Enter password" }));
    } else if (formValue.confirmPassword !== formValue.password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Enter correct password",
      }));
    } else {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
    }
    console.log(error);
    if (
      error.email == "" &&
      error.phone == "" &&
      error.password == "" &&
      error.confirmPassword == ""
    ) {
      setPage(3);
      localStorage.setItem("stepTwo", JSON.stringify(formValue));
    }
  };

  useEffect(() => {
    const data1 = localStorage.getItem("stepTwo");
    setFormValue(JSON.parse(data1) || {});
  }, []);

  const onClickBack = () => {
    setPage(1);
  };
  const emailChanged = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };
  const phoneChanged = (e) => {
    setFormValue({ ...formValue, phone: e.target.value });
  };
  const passwordChanged = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };
  const confirmPasswordChanged = (e) => {
    setFormValue({ ...formValue, confirmPassword: e.target.value });
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
              <p>Email</p>
              <input
                value={formValue?.email || ""}
                onChange={emailChanged}
                className=" w-full p-3 border border-gray-500 rounded-lg"
                placeholder="email"
              />
              {error.email ? (
                <div className="text-red-500">{error.email}</div>
              ) : (
                <></>
              )}
            </div>

            <div className=" flex flex-col gap-2">
              <p>Phone number</p>
              <input
                value={formValue?.phone || ""}
                onChange={phoneChanged}
                className="w-full p-3 border border-gray-500 rounded-lg"
                placeholder="phone"
              />
              {error.phone ? (
                <div className="text-red-500">{error.phone}</div>
              ) : (
                <></>
              )}
            </div>

            <div className=" flex flex-col gap-2">
              <p>Password</p>
              <input
                value={formValue?.password || ""}
                onChange={passwordChanged}
                className="w-full p-3 border border-gray-500 rounded-lg"
                placeholder="password"
              />
              {error.password ? (
                <div className="text-red-500">{error.password}</div>
              ) : (
                <></>
              )}
            </div>

            <div className=" flex flex-col gap-2">
              <p>Confirm password</p>
              <input
                value={formValue?.confirmPassword || ""}
                onChange={confirmPasswordChanged}
                className="w-full p-3 border border-gray-500 rounded-lg"
                placeholder="confirm password"
              />
              {error.confirmPassword ? (
                <div className="text-red-500">{error.confirmPassword}</div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex gap-3 ">
            <button
              className="px-5 py-3.5 bg-white text-black rounded-lg mb-6 w-[200px] border-black border-solid border-1"
              onClick={onClickBack}
            >
              Back
            </button>
            <button
              className="px-5 py-3.5 bg-black text-white rounded-lg mb-6 w-[200px]"
              onClick={onClick}
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Second;
