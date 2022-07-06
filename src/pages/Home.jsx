import React from "react";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold">Home page</h1>
      <Post />
    </div>
  );
};

export default Home;
