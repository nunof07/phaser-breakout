import { TextConfig } from '@config/TextConfig';
import { Coordinates } from '@display/Coordinates';

/**
 * Text display.
 */
export interface TextDisplay {
    readonly text: string;
    readonly config: TextConfig;
    readonly position: Coordinates;
    readonly center?: boolean;
    readonly visible?: boolean;
    readonly depth?: number;
}
