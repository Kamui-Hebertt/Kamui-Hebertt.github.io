import { createSlice,PayloadAction } from "@reduxjs/toolkit";



interface LanguageState {
  language:"english" | "portuguese"
};

const initialState: LanguageState = {
  language:"english"
}

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
  setLanguage: (state, action: PayloadAction<"english" | "portuguese">) => {
  state.language = action.payload;
  },
  },
  });
  
  export const { setLanguage } = languageSlice.actions;
  export default languageSlice.reducer;