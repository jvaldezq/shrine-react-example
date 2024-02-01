export type HouseType = {
  id: number;
  owner: string;
  photo: string;
  location: string;
  price: number;
};

export type HouseFilters = {
  location: string[];
};

export enum HouseFiltersEnum {
  LOCATION = "location",
}

export type AppDataState = {
  houses: HouseType[];
  houseFilters: HouseFilters;
  filterList: string[];
};

export type AppFnState = {
  fetchHousesByLocation: () => Promise<void>;
  updateHouseFilter: (type: HouseFiltersEnum, value: string | string[]) => void;
  fetchHousesFilterList: () => Promise<void>;
};

export interface AppDataContextType extends AppDataState, AppFnState {}
