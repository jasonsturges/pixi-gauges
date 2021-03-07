import { AbstractControl } from "./AbstractControl";
import { IAxis } from "./IAxis";

export abstract class AbstractAxis extends AbstractControl implements IAxis {
  protected _autoAdjustMinMax: boolean = true;
  protected _axisAlpha: number = 1;
  protected _axisColor: number = 0xffffff;
  protected _axisHeight: number = 200;
  protected _axisLabelFontAlpha: number = 1;
  protected _axisLabelFontColor: number = 0xffffff;
  protected _axisLabelFontName: string = "Arial";
  protected _axisLabelFontSize: number = 8;
  protected _axisLabelGap: number = 0.19;
  protected _axisLabelsVisible: boolean = true;
  protected _axisVisible: boolean = true;
  protected _axisWeight: number = 2;
  protected _axisWidth: number = 200;
  protected _majorTickAlpha: number = 1;
  protected _majorTickColor: number = 0xffffff;
  protected _majorTickCount: number = 16;
  protected _majorTickLength: number = 0.1;
  protected _majorTickWeight: number = 2;
  protected _maximum: number = 100;
  protected _minimum: number = 0;
  protected _minorTickAlpha: number = 1;
  protected _minorTickColor: number = 0xffffff;
  protected _minorTickCount: number = 4;
  protected _minorTickLength: number = 0.05;
  protected _minorTickWeight: number = 1;
  protected _precision: number = 0;

  /**
   * autoAdjustMinMax
   */
  get autoAdjustMinMax(): boolean {
    return this._autoAdjustMinMax;
  }

  set autoAdjustMinMax(value: boolean) {
    if (this._autoAdjustMinMax === value) return;

    this._autoAdjustMinMax = value;
    this.invalidate();
  }

  /**
   * axisAlpha
   */
  get axisAlpha(): number {
    return this._axisAlpha;
  }

  set axisAlpha(value: number) {
    if (this._axisAlpha === value) return;

    this._axisAlpha = value;
    this.invalidate();
  }

  /**
   * axisColor
   */
  get axisColor(): number {
    return this._axisColor;
  }

  set axisColor(value: number) {
    if (this._axisColor === value) return;

    this._axisColor = value;
    this.invalidate();
  }

  /**
   * axisHeight
   */
  get axisHeight(): number {
    return this._axisHeight;
  }

  set axisHeight(value: number) {
    if (this._axisHeight === value) return;

    this._axisHeight = value;
    this.invalidate();
  }

  /**
   * axisLabelFontAlpha
   */
  get axisLabelFontAlpha(): number {
    return this._axisLabelFontAlpha;
  }

  set axisLabelFontAlpha(value: number) {
    if (this._axisLabelFontAlpha === value) return;

    this._axisLabelFontAlpha = value;
    this.invalidate();
  }

  /**
   * axisLabelFontColor
   */
  get axisLabelFontColor(): number {
    return this._axisLabelFontColor;
  }

  set axisLabelFontColor(value: number) {
    if (this._axisLabelFontColor === value) return;

    this._axisLabelFontColor = value;
    this.invalidate();
  }

  /**
   * axisLabelFontName
   */
  get axisLabelFontName(): string {
    return this._axisLabelFontName;
  }

  set axisLabelFontName(value: string) {
    if (this._axisLabelFontName === value) return;

    this._axisLabelFontName = value;
    this.invalidate();
  }

  /**
   * axisLabelFontSize
   */
  get axisLabelFontSize(): number {
    return this._axisLabelFontSize;
  }

  set axisLabelFontSize(value: number) {
    if (this._axisLabelFontSize === value) return;

    this._axisLabelFontSize = value;
    this.invalidate();
  }

  /**
   * axisLabelGap
   */
  get axisLabelGap(): number {
    return this._axisLabelGap;
  }

  set axisLabelGap(value: number) {
    if (this._axisLabelGap === value) return;

    this._axisLabelGap = value;
    this.invalidate();
  }

  /**
   * axisLabelsVisible
   */
  get axisLabelsVisible(): boolean {
    return this._axisLabelsVisible;
  }

  set axisLabelsVisible(value: boolean) {
    if (this._axisLabelsVisible === value) return;

    this._axisLabelsVisible = value;
    this.invalidate();
  }

  /**
   * axisVisible
   */
  get axisVisible(): boolean {
    return this._axisVisible;
  }

  set axisVisible(value: boolean) {
    if (this._axisVisible === value) return;

    this._axisVisible = value;
    this.invalidate();
  }

  /**
   * axisWeight
   */
  get axisWeight(): number {
    return this._axisWeight;
  }

  set axisWeight(value: number) {
    if (this._axisWeight === value) return;

    this._axisWeight = value;
    this.invalidate();
  }

  /**
   * axisWidth
   */
  get axisWidth(): number {
    return this._axisWidth;
  }

  set axisWidth(value: number) {
    if (this._axisWidth === value) return;

    this._axisWidth = value;
    this.invalidate();
  }

  /**
   * majorTickAlpha
   */
  get majorTickAlpha(): number {
    return this._majorTickAlpha;
  }

  set majorTickAlpha(value: number) {
    if (this._majorTickAlpha === value) return;

    this._majorTickAlpha = value;
    this.invalidate();
  }

  /**
   * majorTickColor
   */
  get majorTickColor(): number {
    return this._majorTickColor;
  }

  set majorTickColor(value: number) {
    if (this._majorTickColor === value) return;

    this._majorTickColor = value;
    this.invalidate();
  }

  /**
   * majorTickCount
   */
  get majorTickCount(): number {
    return this._majorTickCount;
  }

  set majorTickCount(value: number) {
    if (this._majorTickCount === value) return;

    this._majorTickCount = value;
    this.invalidate();
  }

  /**
   * majorTickLength
   */
  get majorTickLength(): number {
    return this._majorTickLength;
  }

  set majorTickLength(value: number) {
    if (this._majorTickLength === value) return;

    this._majorTickLength = value;
    this.invalidate();
  }

  /**
   * majorTickWeight
   */
  get majorTickWeight(): number {
    return this._majorTickWeight;
  }

  set majorTickWeight(value: number) {
    if (this._majorTickWeight === value) return;

    this._majorTickWeight = value;
    this.invalidate();
  }

  /**
   * maximum
   */
  get maximum(): number {
    return this._maximum;
  }

  set maximum(value: number) {
    if (this._maximum === value) return;

    this._maximum = value;
    this.invalidate();
  }

  /**
   * minimum
   */
  get minimum(): number {
    return this._minimum;
  }

  set minimum(value: number) {
    if (this._minimum === value) return;

    this._minimum = value;
    this.invalidate();
  }

  /**
   * minorTickAlpha
   */
  get minorTickAlpha(): number {
    return this._minorTickAlpha;
  }

  set minorTickAlpha(value: number) {
    if (this._minorTickAlpha === value) return;

    this._minorTickAlpha = value;
    this.invalidate();
  }

  /**
   * minorTickColor
   */
  get minorTickColor(): number {
    return this._minorTickColor;
  }

  set minorTickColor(value: number) {
    if (this._minorTickColor === value) return;

    this._minorTickColor = value;
    this.invalidate();
  }

  /**
   * minorTickCount
   */
  get minorTickCount(): number {
    return this._minorTickCount;
  }

  set minorTickCount(value: number) {
    if (this._minorTickCount === value) return;

    this._minorTickCount = value;
    this.invalidate();
  }

  /**
   * minorTickLength
   */
  get minorTickLength(): number {
    return this._minorTickLength;
  }

  set minorTickLength(value: number) {
    if (this._minorTickLength === value) return;

    this._minorTickLength = value;
    this.invalidate();
  }

  /**
   * minorTickWeight
   */
  get minorTickWeight(): number {
    return this._minorTickWeight;
  }

  set minorTickWeight(value: number) {
    if (this._minorTickWeight === value) return;

    this._minorTickWeight = value;
    this.invalidate();
  }

  /**
   * precision
   */
  get precision(): number {
    return this._precision;
  }

  set precision(value: number) {
    if (this._precision === value) return;

    this._precision = value;
    this.invalidate();
  }

  abstract renderAxis(): void;
  abstract renderLabels(): void;
  abstract renderTickMarks(): void;
}
