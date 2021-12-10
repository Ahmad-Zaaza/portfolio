import { SPARKLE_DEFAULT_COLOR } from "@/lib/constants";

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export const range = (start: number, end?: number, step: number = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
export const generateSparkle = (color: string = SPARKLE_DEFAULT_COLOR) => {
  return {
    id: randomNumber(1111, 9999),
    createdAt: Date.now(),
    color,
    size: randomNumber(10, 20),
    style: {
      top: randomNumber(0, 100) + "%",
      left: randomNumber(0, 100) + "%"
    },
    zIndex: 2
  };
};
