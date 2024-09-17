import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/features/counterSlice";
import languages from '@/app/redux/features/languageSlice'

export const store = configureStore({
  reducer: {
    counterReducer,
    languages,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
