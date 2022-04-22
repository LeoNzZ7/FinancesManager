import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'searchItem',
    initialState: {
        title: '',
        category: ''
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    }
})

export const { setTitle, setCategory } = slice.actions;
export default slice.reducer;

// 1 - State é o dado inicial
// 2 - Action é ação que recebera os dados e os mudará para os daados recebidos pelo payload 
// 3 - payload é são os novos dados recebidos e que substituirão os dados iniciais