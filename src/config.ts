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
    pixel: {
        key: 'pixel',
        url: 'images/transparent_pixel.png',
    },
    player: {
        position: {
            x: 400,
            y: 600 - 15 * 1.5,
        },
        size: {
            width: 160,
            height: 30,
        },
        color: 0xAA0000,
    },
};
