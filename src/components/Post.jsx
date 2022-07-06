import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "./Layout/Loading";
import { Link } from "react-router-dom";

const Post = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const getAllPost = async () => {
    try {
      setIsloading(true);
      const res = await axios.get(url);
      setUsers(res.data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className=" max-w-7xl mx-auto">
      <h1 className="text-xl my-10 text-center">All Users List Below</h1>
	  
	  {isloading && !users.length && <Loading /> }
      <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {users.map((user) => (
          <Link
            to={`/user/${user.id}`}
            key={user.id}
            className="w-full bg-slate-900 text-white flex justify-start items-start flex-col p-5"
          >
            <h2 className=" font-semibold text-2xl">{user.name}</h2>
            <h5 className=" text-base">{user.email}</h5>
            <p className="text-sm">{user.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
