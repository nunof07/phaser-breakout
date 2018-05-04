import { BrickConfig } from '@config/BrickConfig';

/**
 * Determine text color for brick.
 * @param brick Brick config.
 * @param isPowerup Is brick a powerup?
 */
export function brickTextColor(brick: BrickConfig, isPowerup: boolean): number {
    return isPowerup ? brick.powerupBorder : brick.sprite.border;
}
