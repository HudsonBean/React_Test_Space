export type readonlyprops<T> = {
  readonly [P in keyof T]: T[P];
};
