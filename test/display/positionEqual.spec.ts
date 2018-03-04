import { Position } from '@display/Position';
import { positionEqual } from '@display/positionEqual';
import { expect } from 'chai';

/**
 * {@link positionEqual} unit tests.
 */
describe('positionEqual', () => {
    it('same position references should return true', () => {
        const position: Position = { x: 1, y : 1 };
        expect(
            positionEqual(position, position),
        ).to.equal(true, 'expected same position to return true');
    });
    it('equal positions should return true', () => {
        expect(
            positionEqual({ x: 1, y : 1 }, { x: 1, y : 1 }),
        ).to.equal(true, 'expected equal positions to return true');
    });
    it('different positions should return false', () => {
        expect(
            positionEqual({ x: 0, y : 1 }, { x: 1, y : 1 }),
        ).to.equal(false, 'expected different positions to return false');
    });
});
