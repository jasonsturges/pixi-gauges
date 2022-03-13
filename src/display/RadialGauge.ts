import * as PIXI from "pixi.js";

import { AbstractGauge } from "./AbstractGauge";
import { Needle } from "./Needle";
import { PolarAxis } from "./PolarAxis";
import { RadialGaugeOptions } from "./RadialGaugeOptions";

export class RadialGauge extends AbstractGauge {
  private readonly _needle: Needle;
  private readonly _polarAxis: PolarAxis;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * axisAlpha
   */
  get axisAlpha(): number {
    return this._polarAxis.axisAlpha;
  }

  set axisAlpha(value: number) {
    this._polarAxis.axisAlpha = value;
  }

  /**
   * axisColor
   */
  get axisColor(): number {
    return this._polarAxis.axisColor;
  }

  set axisColor(value: number) {
    this._polarAxis.axisColor = value;
  }

  /**
   * axisLabelFontAlpha
   */
  get axisLabelFontAlpha(): number {
    return this._polarAxis.axisLabelFontAlpha;
  }

  set axisLabelFontAlpha(value: number) {
    this._polarAxis.axisLabelFontAlpha = value;
  }

  /**
   * axisLabelFontColor
   */
  get axisLabelFontColor(): number {
    return this._polarAxis.axisLabelFontColor;
  }

  set axisLabelFontColor(value: number) {
    this._polarAxis.axisLabelFontColor = value;
  }

  /**
   * axisLabelFontName
   */
  get axisLabelFontName(): string {
    return this._polarAxis.axisLabelFontName;
  }

  set axisLabelFontName(value: string) {
    this._polarAxis.axisLabelFontName = value;
  }

  /**
   * axisLabelFontSize
   */
  get axisLabelFontSize(): number {
    return this._polarAxis.axisLabelFontSize;
  }

  set axisLabelFontSize(value: number) {
    this._polarAxis.axisLabelFontSize = value;
  }

  /**
   * axisLabelGap
   */
  get axisLabelGap(): number {
    return this._polarAxis.axisLabelGap;
  }

  set axisLabelGap(value: number) {
    this._polarAxis.axisLabelGap = value;
  }

  /**
   * axisLabelsVisible
   */
  get axisLabelsVisible(): boolean {
    return this._polarAxis.axisLabelsVisible;
  }

  set axisLabelsVisible(value: boolean) {
    this._polarAxis.axisLabelsVisible = value;
  }

  /**
   * axisVisible
   */
  get axisVisible(): boolean {
    return this._polarAxis.axisVisible;
  }

  set axisVisible(value: boolean) {
    this._polarAxis.axisVisible = value;
  }

  /**
   * axisWeight
   */
  get axisWeight(): number {
    return this._polarAxis.axisWeight;
  }

  set axisWeight(value: number) {
    this._polarAxis.axisWeight = value;
  }

  /**
   * majorTickAlpha
   */
  get majorTickAlpha(): number {
    return this._polarAxis.majorTickAlpha;
  }

  set majorTickAlpha(value: number) {
    this._polarAxis.majorTickAlpha = value;
  }

  /**
   * majorTickColor
   */
  get majorTickColor(): number {
    return this._polarAxis.majorTickColor;
  }

  set majorTickColor(value: number) {
    this._polarAxis.majorTickColor = value;
  }

  /**
   * majorTickCount
   */
  get majorTickCount(): number {
    return this._polarAxis.majorTickCount;
  }

  set majorTickCount(value: number) {
    this._polarAxis.majorTickCount = value;
  }

  /**
   * majorTickLength
   */
  get majorTickLength(): number {
    return this._polarAxis.majorTickLength;
  }

  set majorTickLength(value: number) {
    this._polarAxis.majorTickLength = value;
  }

  /**
   * majorTickWeight
   */
  get majorTickWeight(): number {
    return this._polarAxis.majorTickWeight;
  }

  set majorTickWeight(value: number) {
    this._polarAxis.majorTickWeight = value;
  }

  /**
   * minorTickAlpha
   */
  get minorTickAlpha(): number {
    return this._polarAxis.minorTickAlpha;
  }

  set minorTickAlpha(value: number) {
    this._polarAxis.minorTickAlpha = value;
  }

  /**
   * minorTickColor
   */
  get minorTickColor(): number {
    return this._polarAxis.minorTickColor;
  }

  set minorTickColor(value: number) {
    this._polarAxis.minorTickColor = value;
  }

  /**
   * minorTickCount
   */
  get minorTickCount(): number {
    return this._polarAxis.minorTickCount;
  }

  set minorTickCount(value: number) {
    this._polarAxis.minorTickCount = value;
  }

  /**
   * minorTickLength
   */
  get minorTickLength(): number {
    return this._polarAxis.minorTickLength;
  }

  set minorTickLength(value: number) {
    this._polarAxis.minorTickLength = value;
  }

  /**
   * minorTickWeight
   */
  get minorTickWeight(): number {
    return this._polarAxis.minorTickWeight;
  }

  set minorTickWeight(value: number) {
    this._polarAxis.minorTickWeight = value;
  }

  /**
   * needleBaseWidth
   */
  get needleBaseWidth(): number {
    return this._needle.needleBaseWidth;
  }

  set needleBaseWidth(value: number) {
    this._needle.needleBaseWidth = value;
  }

  /**
   * needleFillAlpha
   */
  get needleFillAlpha(): number {
    return this._needle.needleFillAlpha;
  }

  set needleFillAlpha(value: number) {
    this._needle.needleFillAlpha = value;
  }

  /**
   * needleFillColor
   */
  get needleFillColor(): number {
    return this._needle.needleFillColor;
  }

  set needleFillColor(value: number) {
    this._needle.needleFillColor = value;
  }

  /**
   * needleRadius
   */
  get needleRadius(): number {
    return this._needle.needleRadius;
  }

  set needleRadius(value: number) {
    this._needle.needleRadius = value;
  }

  /**
   * needleStrokeAlpha
   */
  get needleStrokeAlpha(): number {
    return this._needle.needleStrokeAlpha;
  }

  set needleStrokeAlpha(value: number) {
    this._needle.needleStrokeAlpha = value;
  }

  /**
   * needleStrokeColor
   */
  get needleStrokeColor(): number {
    return this._needle.needleStrokeColor;
  }

  set needleStrokeColor(value: number) {
    this._needle.needleStrokeColor = value;
  }

  /**
   * needleStrokeWeight
   */
  get needleStrokeWeight(): number {
    return this._needle.needleStrokeWeight;
  }

  set needleStrokeWeight(value: number) {
    this._needle.needleStrokeWeight = value;
  }

  /**
   * needleTipWidth
   */
  get needleTipWidth(): number {
    return this._needle.needleTipWidth;
  }

  set needleTipWidth(value: number) {
    this._needle.needleTipWidth = value;
  }

  /**
   * precision
   */
  get precision(): number {
    return this._polarAxis.precision;
  }

  set precision(value: number) {
    this._polarAxis.precision = value;
  }

  /**
   * radius
   */
  get radius(): number {
    return this._polarAxis.radius;
  }

  set radius(value: number) {
    this._polarAxis.radius = value;
  }

  /**
   * spanAngle
   */
  get spanAngle(): number {
    return this._polarAxis.spanAngle;
  }

  set spanAngle(value: number) {
    this._polarAxis.spanAngle = value;
    this._dirty = true;
  }

  /**
   * startAngle
   */
  get startAngle(): number {
    return this._polarAxis.startAngle;
  }

  set startAngle(value: number) {
    this._polarAxis.startAngle = value;
    this._dirty = true;
  }

  //------------------------------
  //  methods
  //------------------------------

  /**
   * @constructor
   */
  constructor(options: Partial<RadialGaugeOptions> = {}) {
    super();

    this._polarAxis = new PolarAxis();
    this.addChild(this._polarAxis);

    this._needle = new Needle();
    this._needle.angle = this._polarAxis.startAngle;
    this.addChild(this._needle);

    this.set(options);
  }

  /**
   * @override
   * @param renderer
   */
  public render(renderer: PIXI.Renderer) {
    super.render(renderer);

    if (!this._dirty) return;
    this._dirty = false;

    const { _needle, _polarAxis, maximum, minimum, value } = this;

    _polarAxis.minimum = this.minimum;
    _polarAxis.maximum = this.maximum;

    const target: number =
      _polarAxis.startAngle +
      _polarAxis.spanAngle * ((value - minimum) / (maximum - minimum));

    _needle.angle = target;
  }

  /**
   * Apply gauge options
   * @param {RadialGaugeOptions} options - Options to be applied
   */
  public set(options: Partial<RadialGaugeOptions> = {}) {
    Object.assign(this,options);
    this._dirty = true;
  }
}
