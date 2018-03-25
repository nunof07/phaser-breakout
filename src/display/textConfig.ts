import { TextConfig } from '@config/TextConfig';
import { assoc } from 'ramda';

/**
 * Create text config.
 * @param text Text.
 * @param color Color.
 */
export function textConfig(text: { fontSize: number; fontFamily: string }, color: number): TextConfig {
    return assoc('color', `#${color.toString(16)}`, text);
}
