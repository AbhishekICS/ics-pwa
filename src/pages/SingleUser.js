import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Layout/Loading";

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const singleUser = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      console.log("res.data", res.data);
      setUser(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };
  useEffect(() => {
    singleUser();
  }, []);

  return (
    <div>
      <div className="">
        {isLoading && !user && (
          <div className="my-20">
            <Loading />
          </div>
        )}
      </div>
      {user && (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {user.username}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {user.name}
                </h1>
                <div class="flex mb-4">Email : {user.email}</div>
                <p class="leading-relaxed">Phone : {user.phone}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <a href={`https://${user.website}`} target="_blank">
                    Website : {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleUser;
