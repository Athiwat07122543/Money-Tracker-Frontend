import React, { useEffect} from "react";
import useStore from "../store/UseStore";
const MainNav = () => {
  const { date, list, selectDate, summary, getListSummary } = useStore();

  useEffect(() => {
    getListSummary()
  }, [list])

  useEffect(()=>{
    getListSummary()
  },[date])
  
  return (
    <div className="p-4 shadow-xl border border-gray-200 rounded-xl bg-white">
      {summary ? (<div className="flex gap-2 flex-wrap md:flex-nowrap">
        <div className="flex items-center border border-gray-200 shadow-md rounded-xl px-2">
          <input
            className="text-xl"
            type="date"
            onChange={(e) => selectDate(e.target.value)}
            value={date}
            lang="th-th"
          />
        </div>
        <div className="flex flex-1 items-center bg-green-500 rounded-xl px-2">
          <span className="text-xl">รายรับวันนี้:</span>
          <span className="text-xl px-2">{summary?.income?._sum?.amount || 0}</span>
          <span className="text-xl">บาท</span>
        </div>
        <div className="flex flex-1 items-center bg-red-500 rounded-xl px-2">
          <span className="text-xl">รายจ่ายวันนี้:</span>
          <span className="text-xl px-2">{summary?.expense?._sum?.amount || 0}</span>
          <span className="text-xl">บาท</span>
        </div>
        <div className="flex flex-1 items-center bg-gray-200 rounded-xl px-2">
          <span className="text-xl">ยอดสุทธิ:</span>
          <span className="text-xl px-2">{(summary?.income?._sum?.amount - summary?.expense?._sum?.amount) || 0}</span>
          <span className="text-xl">บาท</span>
        </div>
      </div>) : (<div>wow</div>)}
    </div>
  );
};

export default MainNav;
