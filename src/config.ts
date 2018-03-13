/**
 * Game configuration.
 */
// tslint:disable:typedef
const game = {
    container: 'game',
    width: 800,
    height: 600,
    debug: false,
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
    color: 0xAAAAAA,
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
    color: 0xAAAA00,
    bounce: 1,
};
const physics = {
    launchVelocity: {
        x: 128,
        y: -512,
    },
    collideVelocity: 8,
};
const brick = {
    position: {
        x: game.width / 4,
        y: game.height / 2,
    },
    size: {
        width: 32,
        height: 32,
    },
    color: 0xAA0000,
};
const bricks = {
    startX: brick.size.width * 3.5,
    startY: brick.size.height * 3.5,
    columns: Math.floor((game.width - brick.size.width * 3 * 2) / brick.size.width),
    rows: Math.floor((game.height * 0.5 - brick.size.height * 2) / brick.size.height),
};
export const config = {
    game,
    graphics,
    paddle,
    ball,
    physics,
    brick,
    bricks,
};
