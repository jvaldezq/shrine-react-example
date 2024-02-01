import { Dispatch, SetStateAction, useCallback } from "react";
import {
  HouseFilters,
  HouseFiltersEnum,
  HouseType,
} from "@/context/AppContext/types.ts";
import { delay } from "@/utils/promiseMock.ts";
import Data from "@/mocks/houses.json";

export const useHousesFunctions = (
  setHouses: Dispatch<SetStateAction<HouseType[]>>,
  houseFilters: HouseFilters,
) => {
  const fetchHousesByLocation = useCallback(async () => {
    //   making a timeout to simulate a request to the server
    await delay(1000);
    // This should be done in the BE but also to simulate
    let res = Data;
    if (houseFilters?.location?.length > 0) {
      res = Data.filter((house) =>
        houseFilters.location.includes(house.location),
      );
    }
    setHouses(res as HouseType[]);
  }, [houseFilters, setHouses]);

  return {
    fetchHousesByLocation,
  };
};

export const useFiltersFunctions = (
  setHouseFilters: Dispatch<SetStateAction<HouseFilters>>,
  setFilterList: Dispatch<SetStateAction<string[]>>,
) => {
  const updateHouseFilter = useCallback(
    (type: HouseFiltersEnum, value: string | string[]) => {
      setHouseFilters((prev) => {
        if (typeof value === "string") {
          const updatedFilter = prev?.[type]?.includes(value)
            ? prev[type].filter((item) => item !== value)
            : prev[type]
              ? [...prev[type], value]
              : [value];

          return {
            ...prev,
            [type]: updatedFilter,
          };
        } else {
          return {
            ...prev,
            [type]: [...value],
          };
        }
      });
    },
    [setHouseFilters],
  );

  const fetchHousesFilterList = useCallback(async () => {
    //   making a timeout to simulate a request to the server
    await delay(1000);
    // This should be done in the BE but also to simulate
    const filters = [...new Set(Data.map((house) => house.location))];
    setFilterList(filters);
  }, [setFilterList]);

  return {
    updateHouseFilter,
    fetchHousesFilterList,
  };
};
