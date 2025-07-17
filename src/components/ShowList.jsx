import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getList } from "../api/List";

const ShowList = () => {
  const [list, setList] = useState([]);
  const showList = async () => {
    try {
      const res = await getList();
      return setList(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    showList();
  }, []);

  return (
    <div className="relative h-[400px]  bg-white rounded-2xl shadow-2xl w-full px-2 py-4">
      <div className="p-4 w-full max-h-[380px]">
        <table className="w-full text-center">
          <div className="overflow-y-scroll h-[340px]">
            <thead>
              <tr className="h-[40px] ">
                <th className="w-2/7 bg-gray-200">รายการ</th>
                <th className="w-1/7 bg-gray-200">เหตุผล</th>
                <th className="w-1/7 bg-gray-200">ราคา</th>
                <th className="w-1/6 bg-gray-200">จำนวน</th>
                <th className="w-2/7 bg-gray-200">เวลา</th>
              </tr>
            </thead>
            <tbody className="w-full text-center">
              {Array.isArray(list) && list.length > 0 ? (
                list.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      item.type === "income" ? "bg-green-500 " : "bg-red-500"
                    }
                  >
                    <td className=" w-2/7 ">
                      {item.type === "income" ? "รายรับ" : "รายจ่าย"}
                    </td>
                    <td className="w-1/7">หวย2ใบ</td>
                    <td className="w-1/7 ">300</td>
                    <td className="w-1/7">3</td>
                    <td className="w-2/7">{item.created_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">ไม่มีข้อมูล</td>
                </tr>
              )}
            </tbody>
          </div>
        </table>
      </div>
    </div>
  );
};

export default ShowList;
