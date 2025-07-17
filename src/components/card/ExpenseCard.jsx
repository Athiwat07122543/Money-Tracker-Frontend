import React, { useEffect, useState } from "react";
import { addExpense } from "../../api/Expense";

const ExpenseCard = () => {
  const [expense, setExpense] = useState({ reason: null, amount: null });

  useEffect(() => {
    console.log(expense);
  }, [expense]);

  const handleAddExpense = async () => {
    try {
      if (!expense.reason) {
        return console.log("กรุณาเหตุผล");
      } else if (!expense.amount) {
        return console.log("กรุณาจำนวนเงิน");
      }
      const res = await addExpense(expense);
      return console.log(res);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="space-y-2 mt-2 px-2">
      <div className="text-xl">เหตุผล</div>
      <input
        className="w-full border h-[40px] px-2 rounded-xl"
        onChange={(e) =>
          setExpense((prev) => ({ ...prev, reason: e.target.value }))
        }
      />
      <div className="text-xl">ราคา</div>
      <input
        className="w-full border h-[40px] px-2 rounded-xl"
        type="Number"
        onChange={(e) =>
          setExpense((prev) => ({ ...prev, amount: Number(e.target.value) }))
        }
      />
      <button
        className=" p-2 border bg-green-500 border-gray-300 hover:bg-green-600 rounded-md text-white"
        onClick={handleAddExpense}
      >
        บันทึก
      </button>
    </div>
  );
};

export default ExpenseCard;
