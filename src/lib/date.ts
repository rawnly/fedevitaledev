import compareDesc from "date-fns/compareDesc";

const getDate = <T extends { date: string | number | Date }>(p: T) =>
  new Date(p.date);

export function sortByDate<T extends { date: string | number | Date }>(
  p1: T,
  p2: T
) {
  return compareDesc(getDate(p1), getDate(p2));
}
