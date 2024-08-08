export function getQuery(category: number, sortby: string, page: number) {
  const order = sortby[0] === "-" ? "desc" : "asc";
  return (
    "?category=" +
    category +
    "&sortby=" +
    sortby.substring(1) +
    "&order=" +
    order +
    "&page=" +
    page
  );
}
