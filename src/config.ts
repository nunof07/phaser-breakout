/**
 * Game configuration.
 */
// tslint:disable:typedef
const game = {
    container: 'game',
    width: 1920,
    height: 974,
    debug: false,
};
const graphics = {
    width: 4,
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
        y: game.height - 10 - graphics.width,
    },
    size: {
        width: 140,
        height: 20,
    },
    color: 0xAAAAAA,
};
const ball = {
    position: {
        x: game.width / 2,
        y: paddle.position.y - paddle.size.height / 2 - 10 - graphics.width * 2,
    },
    size: {
        width: 20,
        height: 20,
    },
    color: 0xAAAA00,
    bounce: 1,
    startHitpoints: 1,
    loseLifePercentage: 0.25,
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
        width: 80,
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
const physics = {
    launchVelocity: {
        x: 140,
        y: game.height * -1,
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
const gameOver = {
    title: 'GAME OVER',
    text: {
        fontFamily: text.fontFamily,
        fontSize: 36,
        color: '#ffffff',
    },
    countdown: 3,
    position: { x: game.width * 0.5, y: game.height * 0.4 },
    background: {
        color: 0x222222,
        position: { x: game.width * 0.35, y: game.height * 0.3 },
        size: { width: game.width * 0.3, height: game.height * 0.3 },
    },
};
const scoreboard = {
    position: {
        points: { x: game.width * 0.5, y: gameOver.position.y + 52 },
        hits: { x: game.width * 0.4, y: gameOver.position.y + 84 },
        bricks: { x: game.width * 0.4, y: gameOver.position.y + 108 },
        iteration: { x: game.width * 0.55, y: gameOver.position.y + 84 },
        duration: { x: game.width * 0.55, y: gameOver.position.y + 108 },
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
const audio = {
    music: {
        key: 'music',
        urls: ['audio/fig-leaf-rag.ogg', 'audio/fig-leaf-rag.mp3'],
        volume: 0.6,
    },
    fx: {
        ballCollide: { key: 'ballCollide', urls: ['audio/hit.ogg', 'audio/hit.mp3'] },
        brickDestroy: { key: 'brickDestroy', urls: ['audio/brick.ogg', 'audio/brick.mp3'] },
        powerup: { key: 'powerup', urls: ['audio/life.ogg', 'audio/life.mp3'] },
        loseLife: { key: 'loseLife', urls: ['audio/floor.ogg', 'audio/floor.mp3'] },
        gameOver: { key: 'gameOver', urls: ['audio/game_over.ogg', 'audio/game_over.mp3'] },
        countdownTick: { key: 'countdownTick', urls: ['audio/countdown.ogg', 'audio/countdown.mp3'] },
        bricksWave: { key: 'bricksWave', urls: ['audio/wave.ogg', 'audio/wave.mp3'] },
    },
};
const progressBar = {
    width: game.width / 3,
    height: 20,
    borderWidth: 2,
    color: 0xFFFFFF,
};
const camera = {
    lowerBricks: {
        duration: 350,
        intensity: 0.0025,
    },
    powerup: {
        duration: 350,
        red: 0,
        green: 0.075,
        blue: 0,
    },
    gameOver: {
        duration: 500,
        intensity: 0.1,
    },
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
    audio,
    progressBar,
    camera,
};
