import React, { useState } from "react";
import MainNav from "../components/MainNav";
import Input from "../components/Input";
import ShowList from "../components/ShowList";

const Home = () => {
  return (
    <div className="p-10 bg-gray-100 h-screen border flex justify-center">
      <div className="w-1/2">
        <div className="">
          <MainNav />
        </div>
        <div className="flex space-x-4 mt-4">
          <Input />
          <ShowList />
        </div>
      </div>
    </div>
  );
};

export default Home;
