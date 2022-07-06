import React from "react";

const Loading = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" h-20 w-20 border-gray-800 animate-spin delay-1000 rounded-full border-dashed border-4"></div>
      </div>
    </div>
  );
};

export default Loading;
