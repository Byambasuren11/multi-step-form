const Final = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200">
        <div className=" bg-white h-fit w-[480px] p-10 rounded-xl flex flex-col gap-6">
          <div className="flex gap-1">
            <Left />
            <Right />
          </div>
          <div>
            <div className="text-xl h-2 font-extrabold text-black mb-6">
              You're All Set! 🔥
            </div>
            <p className="text-xs text-gray-500">
              We've received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
