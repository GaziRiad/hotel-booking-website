"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(e) {
    // This WEB API is usfully especiall when dealing with multiple search params
    const params = new URLSearchParams(searchParams);
    params.set("capacity", e.target.value);
    router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ml-auto mb-8 w-fit">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export default Filter;

function Button({ filter, handleFilter, activeFilter, children }) {
  console.log(children);
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter && "bg-primary-700"
      }`}
      value={filter}
      onClick={(e) => handleFilter(e)}
    >
      {children}
    </button>
  );
}
