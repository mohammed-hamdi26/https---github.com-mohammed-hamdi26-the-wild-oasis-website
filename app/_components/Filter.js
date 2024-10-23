"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const selectedFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        activeFilter={selectedFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        All cabins
      </Button>
      <Button
        activeFilter={selectedFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        1&mdash;3 guests
      </Button>
      <Button
        activeFilter={selectedFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </Button>
      <Button
        activeFilter={selectedFilter}
        handleFilter={handleFilter}
        filter="large"
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 ${
        activeFilter === filter && "bg-primary-700"
      } hover:bg-primary-700`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
