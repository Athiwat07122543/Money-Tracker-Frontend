import { create } from 'zustand'

const useStore = create((set) => ({
  date: new Date().toISOString().split("T")[0],
  selectDate: (newDate) => set({date:newDate})
}))

export default useStore