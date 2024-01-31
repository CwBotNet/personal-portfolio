import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mydata = new Date();

const currentDay = mydata.getDay();
const currentYear = mydata.getFullYear();
const currentMonth = mydata.getMonth();

export const date = `${currentDay}-${currentMonth}-${currentYear}`;
