import React from "react";
import MainNav from "../components/MainNav";
import Input from "../components/Input";
import ShowList from "../components/ShowList";

const Home = () => {
  return (
    <div className="p-10 bg-gray-100 h-screen flex justify-center">
      <div className="w-2/3">
        <div>
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
