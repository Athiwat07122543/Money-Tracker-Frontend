import React, { useEffect, useState } from "react";
import { addType, deleteType, getType } from "../../api/Type";
import { toast } from 'react-toastify';

const TypeCard = ({ onClose }) => {
  const [type, setType] = useState({ name: null });
  const [listType, setListType] = useState([]);

  const getListType = async () => {
    try {
      const res = await getType();
      return setListType(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  const resetListType = async () => {
    try {
      const res = await getType();
      return;
      setListType(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    getListType();
  }, []);

  const handleAddType = async () => {
    try {
      const res = await addType(type);
      await resetListType();
      return toast.success("เพิ่มตัวเลือกสำเร็จ")
    } catch (err) {
      return console.log(err);
    }
  };

  const handleDeleteType = async (id) => {
    try {
      const res = await deleteType(id);
      await resetListType();
      return toast.success("ลบตัวเลือกสำเร็จ")
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div>
      <div className="space-y-2 mt-2">
        <div>ตัวเลือก</div>
        <input
          className="w-full border h-[40px] px-2 rounded-xl"
          onChange={(e) =>
            setType((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button
          className=" p-2 border bg-green-500 border-gray-300 hover:bg-green-600 rounded-md text-white hover:cursor-pointer"
          onClick={handleAddType}
        >
          บันทึก
        </button>
      </div>
      <div className="overflow-y-scroll h-[160px] mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 w-3/4 bg-blue-400 text-white">
                ตัวเลือก
              </th>
              <th className="border border-gray-300 w-1/4 bg-blue-400 text-white">
                ลบ
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(listType) ? (
              listType &&
              listType.length > 0 &&
              listType
                .sort((a, b) => a.id - b.id)
                .map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 w-3/4 text-center">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 w-1/4 text-center">
                      <button
                        onClick={() => handleDeleteType(item.id)}
                        className="hover:cursor-pointer"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={2}>ไม่มีตัวเลือก</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TypeCard;
