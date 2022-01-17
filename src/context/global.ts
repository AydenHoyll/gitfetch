import { createContext } from "react";
import { GlobalContextType } from "../types/common";

export const GLOBAL_CONTEXT_INIT_VALUES = {
  userName: "",
  followers: { isLoading: false, error: "", data: [] },
  user: { isLoading: false, error: "", data: null },
};

export const GlobalContext = createContext<GlobalContextType>(
  GLOBAL_CONTEXT_INIT_VALUES
);
