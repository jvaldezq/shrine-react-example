import {
  Button,
  CircularProgress,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { HouseFiltersEnum, useApp } from "@/context/AppContext";
import { useCallback, useEffect, useState } from "react";

const Filters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { filterList, fetchHousesFilterList, updateHouseFilter, houseFilters } =
    useApp();

  useEffect(() => {
    fetchHousesFilterList().then(() => {
      setIsLoading(false);
    });
  }, [fetchHousesFilterList]);

  const handleChange = useCallback(
    (filter: string | string[]) => {
      updateHouseFilter(HouseFiltersEnum.LOCATION, filter);
    },
    [updateHouseFilter],
  );

  return (
    <section className="max-w-screen-2xl mx-auto px-4 border-solid border-t border-b border-gray-200 py-2 mt-4 flex gap-4 items-center flex-col md:flex-row">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {isLoading ? (
            <>
              Loading
              <CircularProgress isIndeterminate className="[&>svg]:h-4" />
            </>
          ) : (
            "By State"
          )}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            title="State"
            type="checkbox"
            onChange={handleChange}
            value={houseFilters?.location}
          >
            {filterList?.map((filter) => (
              <MenuItemOption value={filter} key={filter}>
                {filter}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <div className="flex gap-2 items-center flex-wrap">
        {houseFilters?.location?.map((filter) => (
          <article
            className="flex gap-1 items-center rounded-2xl bg-gray-200 py-1 px-2"
            key={filter}
            onClick={() => handleChange(filter)}
          >
            <span>{filter}</span>
            <CloseIcon h={3} className="cursor-pointer" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Filters;
