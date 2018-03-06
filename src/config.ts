/**
 * Game configuration.
 */
// tslint:disable-next-line:typedef
export const config = {
    game: {
        container: 'game',
        width: 800,
        height: 600,
    },
    graphics: {
        width: 2,
        texture: {
            key: 'pixel',
            url: 'images/transparent_pixel.png',
        },
    },
    paddle: {
        position: {
            x: 400,
            y: 600 - 8 * 1.5,
        },
        size: {
            width: 96,
            height: 16,
        },
        color: 0xAA0000,
    },
    ball: {
        position: {
            x: 400,
            y: 600 - 8 * 1.5 - 8 - 8 - 2,
        },
        size: {
            width: 16,
            height: 16,
        },
        color: 0x00AA00,
        bounce: 1,
    },
};
