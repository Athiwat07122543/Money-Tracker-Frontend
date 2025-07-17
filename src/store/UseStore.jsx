import { create } from 'zustand';
import { getList, getSummary } from '../api/List';

const useStore = create((set,get) => ({
    list: [],
    summary: [],
    date: new Date().toISOString().split("T")[0],
    getList: async () => {
        const date = get().date
        try {
            const res = await getList(date)
            set({ list: res.data })
            return;
        } catch (err) {
            return console.log(err)
        }
    },
    selectDate: (newDate) => set({ date: newDate }),
    getListSummary: async () => {
        const date = get().date
        try {
            const res = await getSummary(date)
            set({ summary: res.data })
            return;
        } catch (err) {
            return console.log(err)
        }
    }
}))

export default useStore;