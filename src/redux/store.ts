
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import searchReducer from "./reducers/searchReducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        searchItem: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

// RootState é um root geral para todos os novos dados inseridos nos componentes