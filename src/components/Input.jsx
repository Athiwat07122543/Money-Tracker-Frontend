import React, { useState } from "react";
import TypeCard from "./card/TypeCard";
import IncomeCard from "./card/IncomeCard";
import ExpenseCard from "./card/ExpenseCard";

const Input = () => {
  const [menu, setMenu] = useState(1);
  return (
    <div className="border border-gray-300 h-[400px]  bg-white rounded-2xl shadow-2xl w-1/2 px-2 py-4">
      <div className="flex justify-between h-[60px]">
        <button
          onClick={() => setMenu(1)}
          className=" border p-2 border-gray-200 shadow-2xl rounded-xl bg-green-500 text-white w-full hover:bg-green-600 hover:cursor-pointer"
        >
          รายรับ
        </button>
        <button
          onClick={() => setMenu(2)}
          className=" border p-2 border-gray-200 shadow-2xl rounded-xl bg-red-500 text-white w-full hover:bg-red-600 hover:cursor-pointer"
        >
          ร่ายจ่าย
        </button>
        <button
          onClick={() => setMenu(3)}
          className=" border p-2 border-gray-200 shadow-2xl rounded-xl bg-blue-400 text-white w-full hover:bg-blue-500 hover:cursor-pointer"
        >
          ตัวเลือก
        </button>
      </div>
      {menu === 1 && <IncomeCard />}
      {menu === 2 && <ExpenseCard />}
      {menu === 3 && <TypeCard />}
    </div>
  );
};

export default Input;
