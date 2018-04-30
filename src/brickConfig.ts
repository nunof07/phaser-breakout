import { BrickConfig } from '@config/BrickConfig';
import { textConfig } from '@display/textConfig';
import { config } from '@src/config';

/**
 * Brick config.
 */
export function brickConfig(): BrickConfig {
    return {
        bricks: config.bricks,
        sprite: config.brick,
        graphics: config.graphics,
        text: textConfig(config.text, config.brick.border),
        powerupColor: config.brick.powerupColor,
        powerupBorder: config.brick.powerupBorder,
    };
}
