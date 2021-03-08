import { INeedle } from "./INeedle";
import { AbstractControl } from "./AbstractControl";

export abstract class AbstractNeedle extends AbstractControl implements INeedle {
  protected _needleBaseWidth: number = 4;
  protected _needleFillAlpha: number = 1.0;
  protected _needleFillColor: number = 0x313131;
  protected _needleRadius: number = 90;
  protected _needleStrokeAlpha: number = 1.0;
  protected _needleStrokeColor: number = 0xffffff;
  protected _needleStrokeWeight: number = 1;
  protected _needleTipWidth: number = 1;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * needleBaseWidth
   */
  get needleBaseWidth(): number {
    return this._needleBaseWidth;
  }

  set needleBaseWidth(value: number) {
    if (this._needleBaseWidth === value) return;

    this._needleBaseWidth = value;
    this._dirty = true;
  }

  /**
   * needleFillAlpha
   */
  get needleFillAlpha(): number {
    return this._needleFillAlpha;
  }

  set needleFillAlpha(value: number) {
    if (this._needleFillAlpha === value) return;

    this._needleFillAlpha = value;
    this._dirty = true;
  }

  /**
   * needleFillColor
   */
  get needleFillColor(): number {
    return this._needleFillColor;
  }

  set needleFillColor(value: number) {
    if (this._needleFillColor === value) return;

    this._needleFillColor = value;
    this._dirty = true;
  }

  /**
   * needleRadius
   */
  get needleRadius(): number {
    return this._needleRadius;
  }

  set needleRadius(value: number) {
    if (this._needleRadius === value) return;

    this._needleRadius = value;
    this._dirty = true;
  }

  /**
   * needleStrokeAlpha
   */
  get needleStrokeAlpha(): number {
    return this._needleStrokeAlpha;
  }

  set needleStrokeAlpha(value: number) {
    if (this._needleStrokeAlpha === value) return;

    this._needleStrokeAlpha = value;
    this._dirty = true;
  }

  /**
   * needleStrokeColor
   */
  get needleStrokeColor(): number {
    return this._needleStrokeColor;
  }

  set needleStrokeColor(value: number) {
    if (this._needleStrokeColor === value) return;

    this._needleStrokeColor = value;
    this._dirty = true;
  }

  /**
   * needleStrokeWeight
   */
  get needleStrokeWeight(): number {
    return this._needleStrokeWeight;
  }

  set needleStrokeWeight(value: number) {
    if (this._needleStrokeWeight === value) return;

    this._needleStrokeWeight = value;
    this._dirty = true;
  }

  /**
   * needleTipWidth
   */
  get needleTipWidth(): number {
    return this._needleTipWidth;
  }

  set needleTipWidth(value: number) {
    if (this._needleTipWidth === value) return;

    this._needleTipWidth = value;
    this._dirty = true;
  }
}
