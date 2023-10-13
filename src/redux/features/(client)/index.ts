import themeSlice from "./theme";

const clientReducers = {
  [themeSlice.name]: themeSlice.reducer,
};

export default clientReducers;
