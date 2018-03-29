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
const text = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 12,
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
    startHitpoints: 1,
    text: {
        fontFamily: text.fontFamily,
        fontSize: 8,
    },
};
const brick = {
    position: {
        x: game.width / 4,
        y: game.height / 2,
    },
    size: {
        width: 50,
        height: 32,
    },
    color: 0xAA0000,
    powerupColor: 0x00AA00,
};
const bricks = {
    startX: brick.size.width * 0.5,
    startY: brick.size.height * 1.5,
    columns: Math.floor(game.width / brick.size.width),
    lower: {
        ease: 'linear',
        duration: 250,
    },
};
const gameOver = {
    title: 'GAME OVER',
    text: {
        fontFamily: text.fontFamily,
        fontSize: 36,
        color: '#ffffff',
    },
    countdown: 3,
};
const physics = {
    launchVelocity: {
        x: 128,
        y: -512,
    },
    collideVelocity: 8,
    bricksWave: {
        delay: 1000,
        maxDifficultyIteration: 100,
        maxMinColumnsFactor: 0.7,
        hitpointsRangeFactor: 0.5,
        powerup: {
            minIteration: 3,
            factor: 1 / 3,
            hitpointFactor: 0.2,
        },
    },
    gameOverBrickLine: game.height - brick.size.height * 1.5,
};
export const config = {
    game,
    graphics,
    text,
    paddle,
    ball,
    physics,
    brick,
    bricks,
    gameOver,
};
