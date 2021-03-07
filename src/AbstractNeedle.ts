import * as PIXI from "pixi.js";
import { INeedle } from "./INeedle";

export abstract class AbstractNeedle extends PIXI.Sprite implements INeedle {
  protected _needleBaseWidth: number = 4;
  protected _needleFillAlpha: number = 1.0;
  protected _needleFillColor: number = 0x313131;
  protected _needleRadius: number = 50;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
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
    this.dirty = true;
  }

  //------------------------------
  //  methods
  //------------------------------

  /**
   * @constructor
   */
  constructor() {
    super();
    this.dirty = true;
  }
}
