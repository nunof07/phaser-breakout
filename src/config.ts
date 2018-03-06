/**
 * Game configuration.
 */
// tslint:disable:typedef
const game = {
    container: 'game',
    width: 800,
    height: 600,
};
const graphics = {
    width: 2,
    texture: {
        key: 'pixel',
        url: 'images/transparent_pixel.png',
    },
};
const paddle = {
    position: {
        x: game.width / 2,
        y: game.height - 8 - graphics.width,
    },
    size: {
        width: 96,
        height: 16,
    },
    color: 0xAA0000,
};
const ball = {
    position: {
        x: game.width / 2,
        y: paddle.position.y - paddle.size.height / 2 - 8 - graphics.width,
    },
    size: {
        width: 16,
        height: 16,
    },
    color: 0x00AA00,
    bounce: 1,
};
const physics = {
    launchVelocity: {
        x: 200,
        y: -500,
    },
};
export const config = {
    game,
    graphics,
    paddle,
    ball,
    physics,
};
