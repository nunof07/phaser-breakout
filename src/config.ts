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
        width: 128,
        height: 16,
    },
    color: 0xAAAAAA,
};
const ball = {
    position: {
        x: game.width / 2,
        y: paddle.position.y - paddle.size.height - graphics.width * 2,
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
        width: 40,
        height: 20,
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
    position: { x: game.width * 0.5, y: game.height * 0.4 },
};
const physics = {
    launchVelocity: {
        x: 128,
        y: -672,
    },
    collideVelocity: 10,
    bricksWave: {
        delay: 4000,
        maxDifficultyIteration: 100,
        minColumnsFactor: 0.25,
        maxMinColumnsFactor: 0.7,
        hitpointsRangeFactor: 0.5,
        powerup: {
            minIteration: 3,
            factor: 1 / 10,
            hitpointFactor: 0.075,
        },
    },
    gameOverBrickLine: game.height - brick.size.height * 1.5,
};
const scoreboard = {
    position: {
        points: { x: game.width * 0.5, y: gameOver.position.y + 52 },
        hits: { x: game.width * 0.25, y: gameOver.position.y + 84 },
        bricks: { x: game.width * 0.25, y: gameOver.position.y + 108 },
        iteration: { x: game.width * 0.6, y: gameOver.position.y + 84 },
        duration: { x: game.width * 0.6, y: gameOver.position.y + 108 },
    },
    highScore: {
        fontFamily: text.fontFamily,
        fontSize: 24,
        color: '#AAAA00',
    },
    details: {
        fontFamily: text.fontFamily,
        fontSize: 14,
        color: '#00AAAA',
    },
    points: (value: number) => `High score: ${value}`,
    hits: (value: number) => `Hits: ${value}`,
    bricks: (value: number) => `Bricks destroyed: ${value}`,
    iteration: (value: number) => `Rows: ${value}`,
    duration: (value: string) => `Time played: ${value}`,
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
    scoreboard,
};
