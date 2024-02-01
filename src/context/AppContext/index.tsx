import React from "react";
import { AppDataContextType } from "@/context/AppContext/types.ts";

export * from "@/context/AppContext/types.ts";
export * from "./AppContextProvider.tsx";
export * from "./useApp.tsx";

export const AppContext = React.createContext<AppDataContextType>(
  {} as AppDataContextType,
);
