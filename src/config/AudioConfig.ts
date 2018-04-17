/**
 * Audio config.
 */
export interface AudioConfig {
    readonly music: {
        readonly key: string;
        readonly urls: string;
        readonly volume: number;
    };
}
