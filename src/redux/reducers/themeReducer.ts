import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light'
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { setThemeStatus } = slice.actions;
export default slice.reducer;

// 1 - State é o dado inicial
// 2 - Action é ação que recebera os dados e os mudará para os daados recebidos pelo payload 
// 3 - payload é são os novos dados recebidos e que substituirão os dados iniciais