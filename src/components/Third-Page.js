import { useState, useEffect } from "react";
import moment from "moment";
import Product from "./Upload-Image";
import Upload from "./uploadPhotoImg";
import { motion } from "motion/react"
import Header from "./Header";

const Third = (props) => {
  const { setPage } = props;
  const [age, setAge] = useState();
  const [error, setError] = useState({});
  const [picture, setPicture] = useState(false);

  const calculateAge = (e) => {
    setAge(event.target.value);
  };
  console.log(age);
  const onClick = () => {
    let ago = moment(age, "YYYYMMDD").fromNow().split(" ");
    console.log(ago);
    if (!age) {
      setError({ ...prev, age: "Enter age" });
    } else if (Number(ago[0]) < 18) {
      setError((prev) => ({ ...prev, age: "Enter correct age" }));
    } else {
      setError((prev) => ({ ...prev, age: "" }));
    }
    if (picture === false) {
      setError((prev) => ({ ...prev, picture: "Enter picture" }));
    } else {
      setError((prev) => ({ ...prev, picture: "" }));
    }
    if (error.age === "" && error.picture === "") {
      setPage(4);
      localStorage.setItem("stepThree", JSON.stringify(age));
    }
    console.log(Number(ago[0]));
  };
  const onClickBack = () => {
    setPage(2);
  };
  const onChange = () => {
    setPicture(true);
  };

  useEffect(() => {
    const data3 = localStorage.getItem("stepThree");
    setAge(JSON.parse(data3) || {});
  }, []);

  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center h-screen w-full bg-gray-200"
        animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
      >
        <div className=" bg-white h-fit w-[480px] p-10 rounded-xl flex flex-col gap-6">
          <Header />
          <div>
            <div>Date Of Birth</div>
            <input
              className="w-full p-3 border border-gray-500 rounded-lg"
              type="date"
              value={age || ""}
              onChange={calculateAge}
            />
            {error.age ? <p className="text-red-500">{error.age}</p> : <></>}
          </div>
          <div>
            <div>Profile Image</div>
            <div className="">
              {picture === true ? (
                <></>
              ) : (
                <>
                  <label
                    htmlFor="hoho"
                    className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-solid"
                  >
                    <div className="w-full">
                      <div className="flex justify-center">
                        <Upload />
                      </div>
                      <p className="text-sm text-center">
                        Browse or drop image
                      </p>
                    </div>
                  </label>
                  {error.picture ? (
                    <p className="text-red-500">{error.picture}</p>
                  ) : (
                    <></>
                  )}
                </>
              )}
              <Product id="hoho" onChange={onChange} setPicture={setPicture} />
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
              Continue 3/3
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Third;
