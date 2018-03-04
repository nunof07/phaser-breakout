import { positionEqual } from '@display/positionEqual';
import { spritePosition } from '@display/spritePosition';
import { expect } from 'chai';
import Phaser from 'phaser';

/**
 * {@link spritePosition} unit tests.
 */
describe('spritePosition', () => {
    it('should return position from sprite', () => {
        // tslint:disable-next-line:no-any
        const mockSprite: Phaser.Physics.Arcade.Sprite = <Phaser.Physics.Arcade.Sprite><any>{ x: 10, y : 10 };
        expect(
            positionEqual(
                spritePosition(mockSprite),
                { x: 10, y: 10 },
            ),
        ).to.equal(true, 'expected sprite position to be 10, 10');
    });
});
