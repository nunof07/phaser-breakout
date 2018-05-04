import { BrickConfig } from '@config/BrickConfig';
import { TextConfig } from '@config/TextConfig';
import { textConfig } from '@display/textConfig';
import { brickTextColor } from '@systems/bricks/brickTextColor';

/**
 * Create text config for Brick.
 * @param brick Brick
 */
export function brickTextConfig(brick: BrickConfig, isPowerup: boolean): TextConfig {
    return textConfig(brick.text, brickTextColor(brick, isPowerup));
}
