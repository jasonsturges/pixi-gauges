import * as PIXI from "pixi.js";
import { AbstractNeedle } from "./AbstractNeedle";
import { NeedleOptions } from "./NeedleOptions";

export class Needle extends AbstractNeedle {
  private readonly _graphics: PIXI.Graphics;

  /**
   * @constructor
   */
  constructor(options: Partial<NeedleOptions> = {}) {
    super();

    this.set(options);

    this._graphics = new PIXI.Graphics();
    this.addChild(this._graphics);
  }

  /**
   * @override
   * @param renderer
   */
  public render(renderer: PIXI.Renderer) {
    super.render(renderer);

    if (!this._dirty) return;
    this._dirty = false;
    this._graphics.clear();

    const {
      _graphics,
      needleBaseWidth,
      needleFillAlpha,
      needleFillColor,
      needleRadius,
      needleStrokeAlpha,
      needleStrokeColor,
      needleStrokeWeight,
      needleTipWidth,
    } = this;

    _graphics.lineStyle(needleStrokeWeight, needleStrokeColor, needleStrokeAlpha);
    _graphics.beginFill(needleFillColor, needleFillAlpha);

    const base: number = needleBaseWidth * 0.5;
    const basePoint1: PIXI.Point = new PIXI.Point(0, -base);
    const basePoint2: PIXI.Point = new PIXI.Point(0, base);
    const tip: number = needleTipWidth * 0.5;
    const tipPoint1: PIXI.Point = new PIXI.Point(needleRadius, -tip);
    const tipPoint2: PIXI.Point = new PIXI.Point(needleRadius, tip);

    _graphics.moveTo(basePoint1.x, basePoint1.y);
    _graphics.lineTo(tipPoint1.x, tipPoint1.y);

    _graphics.quadraticCurveTo(
      tipPoint1.x + needleTipWidth * 0.5,
      tipPoint1.y,
      tipPoint1.x + needleTipWidth * 0.5,
      tipPoint1.y + needleTipWidth * 0.5
    );

    _graphics.quadraticCurveTo(
      tipPoint2.x + needleTipWidth * 0.5,
      tipPoint2.y,
      tipPoint2.x,
      tipPoint2.y
    );

    _graphics.lineTo(basePoint2.x, basePoint2.y);

    _graphics.quadraticCurveTo(
      basePoint2.x - needleBaseWidth * 0.5,
      basePoint2.y,
      basePoint2.x - needleBaseWidth * 0.5,
      basePoint2.y - needleBaseWidth * 0.5
    );

    _graphics.quadraticCurveTo(
      basePoint1.x - needleBaseWidth * 0.5,
      basePoint1.y,
      basePoint1.x,
      basePoint1.y
    );

    _graphics.endFill();
  }

  /**
   * Apply needle options
   * @param {NeedleOptions} options - Options to be applied
   */
  public set(options: Partial<NeedleOptions> = {}) {
    Object.assign(this, options);
    this._dirty = true;
  }
}
