import create from "zustand";

interface AppData2 {
    countOne: number,
    countTwo: number,
    countThree: number,
    countFour: number,
    increaseOne: () => void;
    increaseTwo: () => void;
    increaseThree: () => void;
    increaseFour: () => void;
}

export const useStore = create<AppData2>(set => ({
    countOne: 0,
    countTwo: 0,
    countThree: 0,
    countFour: 0,
    increaseOne: () => set(state => ({ countOne: state.countOne + 1 })),
    increaseTwo: () => set(state => ({ countTwo: state.countTwo + 1 })),
    increaseThree: () => set(state => ({ countThree: state.countThree + 1 })),
    increaseFour: () => set(state => ({ countFour: state.countFour + 1 })),
}));