import Second from "./Second-Page";
import First from "./First-Page";
import Left from "./Left-Logo";
import Right from "./Right-Logo";
import Third from "./Third-Page";
import { useState } from "react";

const Background = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200">
      <div className=" bg-white h-fit w-[480px] p-10 rounded-xl flex flex-col gap-6">
        <div className="flex gap-1">
          <Left />
          <Right />
        </div>
        <div>
          <div className="text-xl h-2 font-extrabold text-black mb-6">
            Join Us!😎
          </div>
          <p className="text-xs text-gray-500">
            Please provide all current information accurately.
          </p>
        </div>
        {page == 1 ? <First setPage={setPage} /> : <></>}
        {page == 2 ? <Second setPage={setPage} /> : <></>}
        {page == 3 ? <Third setPage={setPage} /> : <></>}
      </div>
    </div>
  );
};
export default Background;
