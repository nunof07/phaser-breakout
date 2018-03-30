import { TextConfig } from '@config/TextConfig';
import { assoc } from 'ramda';

/**
 * Create text config.
 * @param text Text.
 * @param color Color.
 */
export function textConfig(text: { fontSize: number; fontFamily: string }, color: number): TextConfig {
    let colorStr: string = color.toString(16);

    while (colorStr.length < 6) {
        colorStr = `0${colorStr}`;
    }

    return assoc('color', `#${colorStr}`, text);
}
