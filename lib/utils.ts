import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { createFactory } from "hono/factory";

const factory = createFactory();
export const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "force-cache" });
  const data = await res.json();
  return data;
};

export { factory };
