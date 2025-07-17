import React, { useEffect, useState } from "react";
import useStore from "../store/GlobalStore";
import { getSummary } from "../api/List";
const MainNav = () => {
  const { date, selectDate } = useStore();
  const [data, setData] = useState({
    income: null,
    expense: null,
    summary: null,
  });

  const summary = async () => {
    try {
      const res = await getSummary(date);
      await setData((prev) => ({
        ...prev,
        income: res.data.income._sum.amount,
        expense: res.data.expense._sum.amount,
        summary: res.data.income._sum.amount - res.data.expense._sum.amount,
      }));

      return;
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    summary();
  }, [date]);

  return (
    <div className="w-full flex items-center p-4 shadow-xl h-[100px] border border-gray-200 rounded-xl bg-white space-x-2">
      <div className="border border-gray-200  shadow-md text-xl">
        <input
          className="px-2"
          type="date"
          onChange={(e) => selectDate(e.target.value)}
          value={date}
          lang="th-th"
        />
      </div>
      <div className="flex w-full bg-green-500 rounded-xl gap-2">
        <div className="text-xl flex justify-center items-center px-2 ">
          รายรับวันนี้:
        </div>
        {data.income ? (
          <div className="text-xl p-2">{data.income}</div>
        ) : (
          <div className="text-xl p-2">0</div>
        )}
        <div className="text-xl flex justify-center items-center">บาท</div>
      </div>
      <div className="flex w-full gap-2 bg-red-500 rounded-xl">
        <div className="text-xl flex justify-center items-center px-2">
          รายจ่ายวันนี้:
        </div>
        {data.income ? (
          <div className="text-xl  p-2">{data.expense}</div>
        ) : (
          <div className="text-xl p-2">0</div>
        )}
        <div className="text-xl flex justify-center items-center">บาท</div>
      </div>
      <div className="flex w-full gap-2 bg-gray-500 rounded-xl">
        <div className="text-xl flex justify-center items-center px-2">
          ยอดสุทธิ:
        </div>
        {data.income ? (
          <div className="text-xl p-2">{data.summary}</div>
        ) : (
          <div className="text-xl p-2">0</div>
        )}
        <div className="text-xl flex justify-center items-center">บาท</div>
      </div>
    </div>
  );
};

export default MainNav;
