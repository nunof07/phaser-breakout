import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { Bricks } from '@systems/Bricks';
import Phaser from 'phaser';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: ReadonlyArray<BaseGraphicSprite>;
    private groupObj: Phaser.Physics.Arcade.StaticGroup;

    constructor(bricks: ReadonlyArray<BaseGraphicSprite>) {
        this.bricks = bricks;
    }

    public group(): Phaser.Physics.Arcade.StaticGroup {
        return this.groupObj;
    }

    public setup(scene: Phaser.Scene): this {
        this.bricks.forEach((brick: BaseGraphicSprite) => {
            brick.setup(scene);
        });
        this.groupObj = scene.physics.add.staticGroup();
        //     this.bricks.map((brick: BaseGraphicSprite) => brick.sprite()),
        //     { gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 } },
        // );
        //this.groupObj.addMultiple(this.bricks.map((brick: BaseGraphicSprite) => brick.sprite()));
        //Phaser.Actions.PlaceOnRectangle(this.groupObj.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
        //this.groupObj.refresh();

        return this;
    }

    public update(): this {
        this.bricks.forEach((brick: BaseGraphicSprite) => {
            brick.update();
        });

        return this;
    }
}
