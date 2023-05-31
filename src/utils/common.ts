export const isDev: boolean = process.env.NODE_ENV === "development";

export const isServer: boolean = typeof window === "undefined";

export const range = (start: number, end: number): Array<number> => {
  return Array.from(Array(Math.abs(end - start) + 1), (_, i) => start + i);
};

export function isDefined<T>(val: T): val is NonNullable<T> {
  if (val == null || typeof val === "undefined") return false;
  return true;
}
