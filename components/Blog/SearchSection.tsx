import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Input, Button } from "@nextui-org/react";

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Redirect to the search page with the query parameter
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };
  return (
    <form action="/search" method="get" onSubmit={handleSubmit} className="sm:mt-0 mt-4 text-center flex items-center gap-4">
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="query"
        radius="full"
        placeholder="Search"
        size="md"
        className="placeholder:mt-1"
        startContent={<FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 text-default-600 pr-2 pt-0.5" />}
        endContent={
          <Button size="md" onClick={handleSubmit} className={`bg-primary text-white font-semibold mt-0.5`} radius="full">
            Search
          </Button>
        }
      />
    </form>
  );
};

export default SearchSection;
