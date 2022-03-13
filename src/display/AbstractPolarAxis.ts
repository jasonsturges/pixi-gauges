import { AbstractAxis } from "./AbstractAxis";
import { IPolarAxis } from "./IPolarAxis";

export abstract class AbstractPolarAxis extends AbstractAxis implements IPolarAxis {
  protected _radius: number = 100;
  protected _spanAngle: number = 260;
  protected _startAngle: number = 140;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * radius
   */
  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (this._radius === value) return;

    this._radius = value;
    this._dirty = true;
  }

  /**
   * spanAngle
   */
  get spanAngle(): number {
    return this._spanAngle;
  }

  set spanAngle(value: number) {
    if (this._spanAngle === value) return;

    this._spanAngle = value;
    this._dirty = true;
  }

  /**
   * startAngle
   */
  get startAngle(): number {
    return this._startAngle;
  }

  set startAngle(value: number) {
    if (this._startAngle === value) return;

    this._startAngle = value;
    this._dirty = true;
  }
}
