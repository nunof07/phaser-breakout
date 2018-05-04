/**
 * Convert from hex color to string.
 * @param color Color.
 */
export function textColor(color: number): string {
    let colorStr: string = color.toString(16);

    while (colorStr.length < 6) {
        colorStr = `0${colorStr}`;
    }

    return `#${colorStr}`;
}
