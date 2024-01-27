export const allowedLayoutParams = ["", "column"] as const;
export type LayoutParam = typeof allowedLayoutParams[number];