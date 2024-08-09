export function parseQuery(query: string) {
  if (!query) return undefined;
  const args = query
    .substring(1)
    .split("&")
    .map((elem) => elem.split("="))
    .map((elem) => elem[1]);
  const sortby = args[2] === "asc" ? "+" + args[1] : "-" + args[1];
  const obj = {
    category: Number(args[0]),
    sortby: sortby,
    page: Number(args[3]),
  };
  if (
    Number.isInteger(obj.category) &&
    Number.isInteger(obj.page) &&
    !obj.sortby.includes("undefined")
  )
    return obj;
  else return undefined;
}
