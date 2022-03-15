import { AbstractControl } from "./AbstractControl";
import { AxisOptions } from "./AxisOptions";
import { IAxis } from "./IAxis";

export abstract class AbstractAxis extends AbstractControl implements IAxis {
  private _axisAlpha: number | undefined;
  private _axisColor: number | undefined;
  private _axisLabelFontAlpha: number | undefined;
  private _axisLabelFontColor: number | undefined;
  private _axisLabelFontName: string | undefined;
  private _axisLabelFontSize: number | undefined;
  private _axisLabelGap: number | undefined;
  private _axisLabelsVisible: boolean | undefined;
  private _axisVisible: boolean | undefined;
  private _axisWeight: number | undefined;
  private _majorTickAlpha: number | undefined;
  private _majorTickColor: number | undefined;
  private _majorTickCount: number | undefined;
  private _majorTickLength: number | undefined;
  private _majorTickWeight: number | undefined;
  private _maximum: number | undefined;
  private _minimum: number | undefined;
  private _minorTickAlpha: number | undefined;
  private _minorTickColor: number | undefined;
  private _minorTickCount: number | undefined;
  private _minorTickLength: number | undefined;
  private _minorTickWeight: number | undefined;
  private _precision: number | undefined;

  protected constructor(options?: Partial<AxisOptions>) {
    super();

    this.axisAlpha = options?.axisAlpha;
    this.axisColor = options?.axisColor;
    this.axisLabelFontAlpha = options?.axisLabelFontAlpha;
    this.axisLabelFontColor = options?.axisLabelFontColor;
    this.axisLabelFontName = options?.axisLabelFontName;
    this.axisLabelFontSize = options?.axisLabelFontSize;
    this.axisLabelGap = options?.axisLabelGap;
    this.axisLabelsVisible = options?.axisLabelsVisible;
    this.axisVisible = options?.axisVisible;
    this.axisWeight = options?.axisWeight;
    this.majorTickAlpha = options?.majorTickAlpha;
    this.majorTickColor = options?.majorTickColor;
    this.majorTickCount = options?.majorTickCount;
    this.majorTickLength = options?.majorTickLength;
    this.majorTickWeight = options?.majorTickWeight;
    this.maximum = options?.maximum;
    this.minimum = options?.minimum;
    this.minorTickAlpha = options?.minorTickAlpha;
    this.minorTickColor = options?.minorTickColor;
    this.minorTickCount = options?.minorTickCount;
    this.minorTickLength = options?.minorTickLength;
    this.minorTickWeight = options?.minorTickWeight;
    this.precision = options?.precision;
  }

  //------------------------------
  //  properties
  //------------------------------

  /**
   * axisAlpha
   */
  get axisAlpha() {
    return this._axisAlpha;
  }

  set axisAlpha(value) {
    if (this._axisAlpha === value) return;
    this._axisAlpha = value;
    this.invalidate();
  }

  /**
   * axisColor
   */
  get axisColor() {
    return this._axisColor;
  }

  set axisColor(value) {
    if (this._axisColor === value) return;
    this._axisColor = value;
    this.invalidate();
  }

  /**
   * axisLabelFontAlpha
   */
  get axisLabelFontAlpha() {
    return this._axisLabelFontAlpha;
  }

  set axisLabelFontAlpha(value) {
    if (this._axisLabelFontAlpha === value) return;
    this._axisLabelFontAlpha = value;
    this.invalidate();
  }

  /**
   * axisLabelFontColor
   */
  get axisLabelFontColor() {
    return this._axisLabelFontColor;
  }

  set axisLabelFontColor(value) {
    if (this._axisLabelFontColor === value) return;
    this._axisLabelFontColor = value;
    this.invalidate();
  }

  /**
   * axisLabelFontName
   */
  get axisLabelFontName() {
    return this._axisLabelFontName;
  }

  set axisLabelFontName(value) {
    if (this._axisLabelFontName === value) return;
    this._axisLabelFontName = value;
    this.invalidate();
  }

  /**
   * axisLabelFontSize
   */
  get axisLabelFontSize() {
    return this._axisLabelFontSize;
  }

  set axisLabelFontSize(value) {
    if (this._axisLabelFontSize === value) return;
    this._axisLabelFontSize = value;
    this.invalidate();
  }

  /**
   * axisLabelGap
   */
  get axisLabelGap() {
    return this._axisLabelGap;
  }

  set axisLabelGap(value) {
    if (this._axisLabelGap === value) return;
    this._axisLabelGap = value;
    this.invalidate();
  }

  /**
   * axisLabelsVisible
   */
  get axisLabelsVisible() {
    return this._axisLabelsVisible;
  }

  set axisLabelsVisible(value) {
    if (this._axisLabelsVisible === value) return;
    this._axisLabelsVisible = value;
    this.invalidate();
  }

  /**
   * axisVisible
   */
  get axisVisible() {
    return this._axisVisible;
  }

  set axisVisible(value) {
    if (this._axisVisible === value) return;
    this._axisVisible = value;
    this.invalidate();
  }

  /**
   * axisWeight
   */
  get axisWeight() {
    return this._axisWeight;
  }

  set axisWeight(value) {
    if (this._axisWeight === value) return;
    this._axisWeight = value;
    this.invalidate();
  }

  /**
   * majorTickAlpha
   */
  get majorTickAlpha() {
    return this._majorTickAlpha;
  }

  set majorTickAlpha(value) {
    if (this._majorTickAlpha === value) return;
    this._majorTickAlpha = value;
    this.invalidate();
  }

  /**
   * majorTickColor
   */
  get majorTickColor() {
    return this._majorTickColor;
  }

  set majorTickColor(value) {
    if (this._majorTickColor === value) return;
    this._majorTickColor = value;
    this.invalidate();
  }

  /**
   * majorTickCount
   */
  get majorTickCount() {
    return this._majorTickCount;
  }

  set majorTickCount(value) {
    if (this._majorTickCount === value) return;
    this._majorTickCount = value;
    this.invalidate();
  }

  /**
   * majorTickLength
   */
  get majorTickLength() {
    return this._majorTickLength;
  }

  set majorTickLength(value) {
    if (this._majorTickLength === value) return;
    this._majorTickLength = value;
    this.invalidate();
  }

  /**
   * majorTickWeight
   */
  get majorTickWeight() {
    return this._majorTickWeight;
  }

  set majorTickWeight(value) {
    if (this._majorTickWeight === value) return;
    this._majorTickWeight = value;
    this.invalidate();
  }

  /**
   * maximum
   */
  get maximum() {
    return this._maximum;
  }

  set maximum(value) {
    if (this._maximum === value) return;
    this._maximum = value;
    this.invalidate();
  }

  /**
   * minimum
   */
  get minimum() {
    return this._minimum;
  }

  set minimum(value) {
    if (this._minimum === value) return;
    this._minimum = value;
    this.invalidate();
  }

  /**
   * minorTickAlpha
   */
  get minorTickAlpha() {
    return this._minorTickAlpha;
  }

  set minorTickAlpha(value) {
    if (this._minorTickAlpha === value) return;
    this._minorTickAlpha = value;
    this.invalidate();
  }

  /**
   * minorTickColor
   */
  get minorTickColor() {
    return this._minorTickColor;
  }

  set minorTickColor(value) {
    if (this._minorTickColor === value) return;
    this._minorTickColor = value;
    this.invalidate();
  }

  /**
   * minorTickCount
   */
  get minorTickCount() {
    return this._minorTickCount;
  }

  set minorTickCount(value) {
    if (this._minorTickCount === value) return;
    this._minorTickCount = value;
    this.invalidate();
  }

  /**
   * minorTickLength
   */
  get minorTickLength() {
    return this._minorTickLength;
  }

  set minorTickLength(value) {
    if (this._minorTickLength === value) return;
    this._minorTickLength = value;
    this.invalidate();
  }

  /**
   * minorTickWeight
   */
  get minorTickWeight() {
    return this._minorTickWeight;
  }

  set minorTickWeight(value) {
    if (this._minorTickWeight === value) return;
    this._minorTickWeight = value;
    this.invalidate();
  }

  /**
   * precision
   */
  get precision() {
    return this._precision;
  }

  set precision(value) {
    if (this._precision === value) return;
    this._precision = value;
    this.invalidate();
  }
}
