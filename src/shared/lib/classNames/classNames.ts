type Mods = Record<string, boolean | string>;

export const classNames = (mainClass: string, mods: Mods = {}, additional: string[] = []): string =>
    [
        mainClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
