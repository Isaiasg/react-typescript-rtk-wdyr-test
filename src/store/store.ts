import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface AppData {
    countOne: number,
    countTwo: number,
    countThree: number,
    countFour: number,
}

const initialState: AppData = {
    countOne: 0,
    countTwo: 0,
    countThree: 0,
    countFour: 0,

};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementOne: (state: AppData) => { state.countOne++ },
        incrementTwo: (state: AppData) => { state.countTwo++ },
        incrementThree: (state: AppData) => { state.countThree++ },
        incrementFour: (state: AppData) => { state.countFour++ }
    }
});

//for multiple slices if needed
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// });

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;