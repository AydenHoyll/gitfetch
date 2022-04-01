import { createContext } from "react";
import { GlobalContextType } from "../types/common";

export const GLOBAL_CONTEXT_INIT_VALUES: GlobalContextType = {
  user: { isLoading: false, error: "", data: null, followers: [] },
};

export const GlobalContext = createContext<GlobalContextType>(
  GLOBAL_CONTEXT_INIT_VALUES
);

