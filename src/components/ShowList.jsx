import React from "react";
import { useEffect } from "react";
import useStore from "../store/UseStore";
import moment from "moment"

const ShowList = () => {
  const list = useStore((state) => state.list)
  const getList = useStore((state) => state.getList)
  const date = useStore((state) => state.date)

  useEffect(() => {
    getList()
  }, [getList])

  useEffect(() => {
    getList()
  }, [date])

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl w-full px-2 py-4">
      <div className="p-4 w-full">
        <table className="w-full text-center">
          <thead>
            <tr className="h-[40px]">
              <th className=" bg-gray-200">รายการ</th>
              <th className=" bg-gray-200">เหตุผล</th>
              <th className=" bg-gray-200">ราคา</th>
              <th className=" bg-gray-200">จำนวน</th>
              <th className=" bg-gray-200">ราคารวม</th>
              <th className=" bg-gray-200 w-2/8">เวลา</th>
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
                  <td className="py-2">
                    {item.type === "income" ? "รายรับ" : "รายจ่าย"}
                  </td>
                  {item.type === "income" ? (<td>{item.typeName}</td>) : (<td >{item.reason}</td>)}
                  <td className=" ">{item.amount}</td>
                  {item.type === "income" ? (<td >{item.count}</td>) : (<td >-</td>)}
                  {item.type === "expense" ? (<td>{item.amount}</td>) : (<td >{item.count * item.amount}</td>)}
                  <td className="">{moment(item.created_at).format("LLL")}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="4">ไม่มีข้อมูล</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowList;
