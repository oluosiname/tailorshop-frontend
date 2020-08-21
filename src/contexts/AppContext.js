import React from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const AppContext = React.createContext({ isSideBarShown: false });
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
