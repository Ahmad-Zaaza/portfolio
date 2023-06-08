const dev = process.env.NODE_ENV !== "production";

export const baseURL = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_BASE_URL;
