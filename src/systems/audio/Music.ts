import { AudioConfig } from '@config/AudioConfig';
import { GameEvents } from '@systems/GameEvents';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Game music.
 */
export class Music implements System {
    private readonly config: AudioConfig;
    private readonly events: GameEvents;
    private sound: Phaser.Sound.BaseSound;

    constructor(config: AudioConfig, events: GameEvents) {
        this.config = config;
        this.events = events;
    }

    public setup(scene: Phaser.Scene): this {
        this.sound = <Phaser.Sound.BaseSound>scene.sound.add(this.config.music.key, { loop: true, volume: this.config.music.volume });
        this.events.onStart(() => this.sound.play());
        this.events.onResume(() => this.sound.resume());
        this.events.onStop(() => this.sound.pause());

        return this;
    }

    public update(): this {
        return this;
    }
}
