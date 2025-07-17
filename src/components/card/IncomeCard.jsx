import React, { use, useEffect, useState } from "react";
import { getType } from "../../api/Type";
import { addIncome } from "../../api/Income";
import useStore from "../../store/UseStore";
import { toast } from 'react-toastify';

const IncomeCard = () => {
  const [dropdown, setDropdown] = useState(false);
  const [type, setType] = useState([]);
  const getList = useStore((state) => state.getList)
  const [income, setIncome] = useState({
    typeId: null,
    amount: null,
    count: null,
  });

  const getListType = async () => {
    try {
      const res = await getType();
      return setType(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  const resetIncome = async () => {
    try {
      setIncome({
        typeId: null,
        amount: "",
        count: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListType();
  }, []);

  const handleAddIncome = async () => {
    try {
      if (!income.typeId) {
        return console.log("กรุณาเลือกตัวเลือก");
      } else if (!income.amount) {
        return console.log("กรุณาใส่ราคา");
      } else if (!income.count) {
        return console.log("กรุณาใส่จำนวน");
      }
      const res = await addIncome(income);
      await getList()
      await resetIncome()
      return toast.success("บันทึกรายรับสำเร็จ")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="space-y-2 mt-2 px-2">
      <div>ตัวเลือก</div>
      <button
        className="w-full border h-[40px] px-2 rounded-xl relative hover:cursor-pointer"
        onClick={() => setDropdown((prev) => !prev)}
      >
        {Array.isArray(type) && type.find((item) => item.id === income.typeId)?.name || "ตัวเลือก"}

      </button>
      <div className="absolute w-[270px] text-center overflow-y-scroll max-h-[220px]">
        {Array.isArray(type) ? (
          dropdown &&
          type &&
          type.length > 0 &&
          type.map((item, index) => (
            <div
              className=" hover:cursor-pointer  bg-gray-100 border"
              onClick={() => {
                setDropdown(false),
                  setIncome((prev) => ({ ...prev, typeId: item.id }));
              }}
              key={index}
              value={item.name}
            >
              {item.name}

            </div>
          ))
        ) : (
          <div>ไม่มีข้อมูล</div>
        )}
      </div>
      <div className="">ราคา</div>
      <input
        value={income.amount ?? ""}
        className="w-full border h-[40px] px-2 rounded-xl"
        onChange={(e) =>
          setIncome((prev) => ({ ...prev, amount: Number(e.target.value) }))
        }
        type="Number"
      />
      <div className="">จำนวน</div>
      <input
        value={income.count ?? ""}
        className="w-full border h-[40px] px-2 rounded-xl"
        onChange={(e) =>
          setIncome((prev) => ({ ...prev, count: Number(e.target.value) }))
        }
        type="Number"
      />
      <button
        className=" p-2 border bg-green-500 border-gray-300 hover:bg-green-600 rounded-md text-white hover:cursor-pointer"
        onClick={handleAddIncome}
      >
        บันทึก
      </button>
    </div>
  );
};

export default IncomeCard;
