import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { createFactory } from "hono/factory";
import axios from "axios";

const factory = createFactory();
export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);

  return await data;
};

export { factory };
