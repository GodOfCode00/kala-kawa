import { combineReducers } from "@reduxjs/toolkit";
import clientReducers from "./(client)";
import serverReducers from "./(server)";

const rootReducer = combineReducers({
  ...clientReducers,
  ...serverReducers,
});

export default rootReducer;
