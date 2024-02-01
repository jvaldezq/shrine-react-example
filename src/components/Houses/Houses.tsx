import { useApp } from "@/context/AppContext";
import { useEffect, useState } from "react";
import HousesSkeleton from "@/components/Houses/HousesSkeleton.tsx";
import HouseCard from "@/components/Houses/HouseCard.tsx";

const Houses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { houses, fetchHousesByLocation, houseFilters } = useApp();

  useEffect(() => {
    setIsLoading(true);
    fetchHousesByLocation().then(() => {
      setIsLoading(false);
    });
  }, [fetchHousesByLocation, houseFilters]);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-2 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 justify-items-center">
      {isLoading &&
        Array(5)
          .fill(0)
          .map((_, index) => <HousesSkeleton key={index} />)}
      {!isLoading &&
        houses.map((house) => <HouseCard key={house.id} {...house} />)}
    </section>
  );
};

export default Houses;
