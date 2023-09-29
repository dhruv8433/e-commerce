"use client";

import { Provider } from "react-redux";
import store from "./store";

export const ProviderStore = ({ children }) => {
  // it support only on client component so that we create component and export it to layout
  return <Provider store={store}>{children}</Provider>;
};
