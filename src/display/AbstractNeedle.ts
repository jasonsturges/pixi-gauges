import { AbstractControl } from "./AbstractControl";
import { INeedle } from "./INeedle";
import { NeedleOptions } from "./NeedleOptions";

export abstract class AbstractNeedle extends AbstractControl implements INeedle {
  private _needleBaseWidth?: number | undefined;
  private _needleFillAlpha?: number | undefined;
  private _needleFillColor?: number | undefined;
  private _needleRadius?: number | undefined;
  private _needleStrokeAlpha?: number | undefined;
  private _needleStrokeColor?: number | undefined;
  private _needleStrokeWeight?: number | undefined;
  private _needleTipWidth?: number | undefined;

  /**
   * Constructor
   */
  protected constructor(options?: Partial<NeedleOptions>) {
    super();

    this.needleBaseWidth = options?.needleBaseWidth;
    this.needleFillAlpha = options?.needleFillAlpha;
    this.needleFillColor = options?.needleFillColor;
    this.needleRadius = options?.needleRadius;
    this.needleStrokeAlpha = options?.needleStrokeAlpha;
    this.needleStrokeColor = options?.needleStrokeColor;
    this.needleStrokeWeight = options?.needleStrokeWeight;
    this.needleTipWidth = options?.needleTipWidth;
  }

  //------------------------------
  //  properties
  //------------------------------

  /**
   * needleBaseWidth
   */
  get needleBaseWidth() {
    return this._needleBaseWidth;
  }

  set needleBaseWidth(value) {
    if (this._needleBaseWidth === value) return;
    this._needleBaseWidth = value;
    this.invalidate();
  }

  /**
   * needleFillAlpha
   */
  get needleFillAlpha() {
    return this._needleFillAlpha;
  }

  set needleFillAlpha(value) {
    if (this._needleFillAlpha === value) return;
    this._needleFillAlpha = value;
    this.invalidate();
  }

  /**
   * needleFillColor
   */
  get needleFillColor() {
    return this._needleFillColor;
  }

  set needleFillColor(value) {
    if (this._needleFillColor === value) return;
    this._needleFillColor = value;
    this.invalidate();
  }

  /**
   * needleRadius
   */
  get needleRadius() {
    return this._needleRadius;
  }

  set needleRadius(value) {
    if (this._needleRadius === value) return;
    this._needleRadius = value;
    this.invalidate();
  }

  /**
   * needleStrokeAlpha
   */
  get needleStrokeAlpha() {
    return this._needleStrokeAlpha;
  }

  set needleStrokeAlpha(value) {
    if (this._needleStrokeAlpha === value) return;
    this._needleStrokeAlpha = value;
    this.invalidate();
  }

  /**
   * needleStrokeColor
   */
  get needleStrokeColor() {
    return this._needleStrokeColor;
  }

  set needleStrokeColor(value) {
    if (this._needleStrokeColor === value) return;
    this._needleStrokeColor = value;
    this.invalidate();
  }

  /**
   * needleStrokeWeight
   */
  get needleStrokeWeight() {
    return this._needleStrokeWeight;
  }

  set needleStrokeWeight(value) {
    if (this._needleStrokeWeight === value) return;
    this._needleStrokeWeight = value;
    this.invalidate();
  }

  /**
   * needleTipWidth
   */
  get needleTipWidth() {
    return this._needleTipWidth;
  }

  set needleTipWidth(value) {
    if (this._needleTipWidth === value) return;
    this._needleTipWidth = value;
    this.invalidate();
  }
}
