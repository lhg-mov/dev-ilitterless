import qs from "query-string";

interface BuildQueryParams {
  type: string;
  query: string;
  categories: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, categories, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`title match "*${query}*"`);

  if (categories && categories !== "all") {
    conditions.push(`"${categories}" in categories[]->title`);
  }

  // Calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1 ? `${conditions[0]} && (${conditions.slice(1).join(" && ")})][${offset}...${limit}]` : `${conditions[0]}][${offset}...${limit}]`;
}

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export function formUrlQuery({ params, key, value, keysToRemove }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl }, { skipNull: true });
}
