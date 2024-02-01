import { useContext } from "react";
import { AppContext } from "./index.tsx";

export const useApp = () => useContext(AppContext);
