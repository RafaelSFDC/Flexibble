"use client";
import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ButtonMotion from "./framerMotion/ButtonMotion";
import state from "@/store/store";
import { useSnapshot } from "valtio";
const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const SearchParams = useSearchParams();
  const snap = useSnapshot(state);
  return (
    <div className="flexBetween w-full gap-5 flex-wrap ">
      <ul className="w-full flex gap-2 overflow-x-auto overflow-y-hidden">
        {categoryFilters.map((filter) => (
          <ButtonMotion
            key={filter}
            type="button"
            onClick={() => {
              state.activeFilter = filter;
            }}
            className={`px-4 py-3 rounded-lg capitalize whitespace-nowrap ${
              snap.activeFilter === filter
                ? "bg-primary-purple text-white font-medium"
                : "font-normal bg-light-white-100"
            } `}
          >
            {filter}
          </ButtonMotion>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
