import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    resetTheme: () => initialState,
    toggleTheme(state) {
      return { isDark: !state.isDark };
    },
  },
});

export const { resetTheme, toggleTheme } = themeSlice.actions;

export default themeSlice;
