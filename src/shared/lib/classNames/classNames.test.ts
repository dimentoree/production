import { classNames } from './classNames';

describe('classNames', () => {
    test('Работа функции с одним параметром', () => {
        expect(classNames('some-class')).toBe('some-class');
    });

    test('Работа функции с дополнительными параметрами', () => {
        const expected = 'mainClass class1 class2';

        expect(classNames('mainClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('Работа функции с модификациями', () => {
        const expected = 'mainClass class1 class2 hovered scrollable';

        expect(
            classNames('mainClass', { hovered: true, scrollable: true }, ['class1', 'class2']),
        ).toBe(expected);
    });

    test('Работа функции с отключенной модификацией', () => {
        const expected = 'mainClass class1 class2 hovered';

        expect(
            classNames('mainClass', { hovered: true, scrollable: false }, ['class1', 'class2']),
        ).toBe(expected);
    });

    test('Работа функции, где модификация - undefined', () => {
        const expected = 'mainClass class1 class2 hovered';

        expect(
            classNames('mainClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']),
        ).toBe(expected);
    });
});
