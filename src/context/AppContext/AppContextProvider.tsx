import { ReactNode, useState } from "react";
import { AppContext, HouseFilters, HouseType } from "./index.tsx";
import {
  useFiltersFunctions,
  useHousesFunctions,
} from "./useStateFunctions.tsx";

export interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [houses, setHouses] = useState<HouseType[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [houseFilters, setHouseFilters] = useState<HouseFilters>(
    {} as HouseFilters,
  );

  const housesFunctions = useHousesFunctions(setHouses, houseFilters);
  const filtersFunctions = useFiltersFunctions(setHouseFilters, setFilterList);

  return (
    <AppContext.Provider
      value={{
        ...filtersFunctions,
        ...housesFunctions,
        houses,
        houseFilters,
        filterList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
