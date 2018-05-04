/**
 * Graphics style.
 */
export interface GraphicsStyle {
    readonly fill: {
        readonly color: number;
    };
    readonly border: {
        readonly color: number;
        readonly width: number;
    };
}
