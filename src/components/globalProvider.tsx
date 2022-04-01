import { FC, useMemo, useState } from "react";
import { GLOBAL_CONTEXT_INIT_VALUES, GlobalContext } from "../context/global";
import { GlobalContextMethodsType } from "../types/common";

export const GlobalContextProvider: FC = ({ children }) => {
  const [state, setState] = useState(GLOBAL_CONTEXT_INIT_VALUES);

  const methods: GlobalContextMethodsType = useMemo(
    () => ({
      setUser: (userState) => {
        setState({
          ...state,
          user: {
            ...state.user,
            ...userState,
          },
        });
      },
    }),
    []
  );

  return (
    <GlobalContext.Provider value={{ ...state, methods }}>
      {children}
    </GlobalContext.Provider>
  );
};
