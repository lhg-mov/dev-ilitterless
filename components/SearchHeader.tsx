import React from "react";

interface Props {
  query: string;
  categories: string;
}

const SearchHeader = ({ query, categories }: Props) => {
  if (query && categories) {
    return (
      <div>
        <h2 className={`sm:text-5xl text-4xl font-semibold text-start text-primary`}>Search Result</h2>
        <h1 className={`text-default-600`}>
          "{query}" in <span className="capitalize">{categories}</span>
        </h1>
      </div>
    );
  }

  if (query) {
    return (
      <div>
        <h2 className={`sm:text-5xl text-4xl font-semibold text-start text-primary`}>Search Result</h2>
        <h1 className={`text-default-600`}>{query}</h1>
      </div>
    );
  }

  if (categories) {
    return (
      <div>
        <h2 className={`sm:text-5xl text-4xl font-semibold text-start text-primary`}>Categories</h2>
        <h1 className={`text-white-600`}>
          <span className="capitalize">{categories}</span>
        </h1>
      </div>
    );
  }
  return <h1 className={`text-white-600`}>No Results</h1>;
};

export default SearchHeader;
