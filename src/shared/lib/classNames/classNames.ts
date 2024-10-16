type Mods = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    mainClass,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
