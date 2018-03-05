/**
 * Configuration for graphics.
 */
export interface GraphicsConfig {
    readonly width: number;
    readonly texture: {
        key: string;
        url: string;
    };
}
