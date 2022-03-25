import { AbstractNeedle } from "./AbstractNeedle";
import { Graphics, ILineStyleOptions, Point } from "pixi.js";
import { NeedleDefaultOptions } from "../factory/NeedleDefaultOptions";
import { NeedleOptions } from "./NeedleOptions";

export class Needle extends AbstractNeedle {
  private readonly _graphics: Graphics | undefined;

  /**
   * Constructor
   */
  constructor(options?: Partial<NeedleOptions>) {
    super({
      ...NeedleDefaultOptions,
      ...options,
    });

    this._graphics = new Graphics();
    this.addChild(this._graphics);
  }

  /**
   * Validate
   */
  protected override validate() {
    super.validate();
    this._graphics?.clear();

    this._graphics?.lineStyle(<ILineStyleOptions>{
      width: this.needleStrokeWeight,
      color: this.needleStrokeColor,
      alpha: this.needleStrokeAlpha,
    });

    this._graphics?.beginFill(this.needleFillColor, this.needleFillAlpha);

    const needleBaseWidth = this.needleBaseWidth ?? 4;
    const base: number = needleBaseWidth * 0.5;
    const basePoint1: Point = new Point(0, -base);
    const basePoint2: Point = new Point(0, base);
    const needleTipWidth = this.needleTipWidth ?? 1;
    const tip: number = needleTipWidth * 0.5;
    const tipPoint1: Point = new Point(this.needleRadius, -tip);
    const tipPoint2: Point = new Point(this.needleRadius, tip);

    this._graphics?.moveTo(basePoint1.x, basePoint1.y);
    this._graphics?.lineTo(tipPoint1.x, tipPoint1.y);

    this._graphics?.quadraticCurveTo(
      tipPoint1.x + needleTipWidth * 0.5,
      tipPoint1.y,
      tipPoint1.x + needleTipWidth * 0.5,
      tipPoint1.y + needleTipWidth * 0.5,
    );

    this._graphics?.quadraticCurveTo(tipPoint2.x + needleTipWidth * 0.5, tipPoint2.y, tipPoint2.x, tipPoint2.y);

    this._graphics?.lineTo(basePoint2.x, basePoint2.y);

    this._graphics?.quadraticCurveTo(
      basePoint2.x - needleBaseWidth * 0.5,
      basePoint2.y,
      basePoint2.x - needleBaseWidth * 0.5,
      basePoint2.y - needleBaseWidth * 0.5,
    );

    this._graphics?.quadraticCurveTo(basePoint1.x - needleBaseWidth * 0.5, basePoint1.y, basePoint1.x, basePoint1.y);

    this._graphics?.endFill();
    this._graphics?.closePath();
  }
}
