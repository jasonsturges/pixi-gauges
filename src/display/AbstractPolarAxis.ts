import { AbstractAxis } from "./AbstractAxis";
import { IPolarAxis } from "./IPolarAxis";
import { PolarAxisOptions } from "./PolarAxisOptions";

export abstract class AbstractPolarAxis extends AbstractAxis implements IPolarAxis {
  private _radius: number | undefined;
  private _spanAngle: number | undefined;
  private _startAngle: number | undefined;

  protected constructor(options: Partial<PolarAxisOptions>) {
    super({
      axisAlpha: options?.axisAlpha,
      axisColor: options?.axisColor,
      axisLabelFontAlpha: options?.axisLabelFontAlpha,
      axisLabelFontColor: options?.axisLabelFontColor,
      axisLabelFontName: options?.axisLabelFontName,
      axisLabelFontSize: options?.axisLabelFontSize,
      axisLabelGap: options?.axisLabelGap,
      axisLabelsVisible: options?.axisLabelsVisible,
      axisVisible: options?.axisVisible,
      axisWeight: options?.axisWeight,
      majorTickAlpha: options?.majorTickAlpha,
      majorTickColor: options?.majorTickColor,
      majorTickCount: options?.majorTickCount,
      majorTickLength: options?.majorTickLength,
      majorTickWeight: options?.majorTickWeight,
      maximum: options?.maximum,
      minimum: options?.minimum,
      minorTickAlpha: options?.minorTickAlpha,
      minorTickColor: options?.minorTickColor,
      minorTickCount: options?.minorTickCount,
      minorTickLength: options?.minorTickLength,
      minorTickWeight: options?.minorTickWeight,
      precision: options?.precision,
    });

    this.radius = options?.radius;
    this.spanAngle = options?.spanAngle;
    this.startAngle = options?.startAngle;
  }

  //------------------------------
  //  properties
  //------------------------------

  /**
   * radius
   */
  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (this._radius === value) return;
    this._radius = value;
    this.invalidate();
  }

  /**
   * spanAngle
   */
  get spanAngle() {
    return this._spanAngle;
  }

  set spanAngle(value) {
    if (this._spanAngle === value) return;
    this._spanAngle = value;
    this.invalidate();
  }

  /**
   * startAngle
   */
  get startAngle() {
    return this._startAngle;
  }

  set startAngle(value) {
    if (this._startAngle === value) return;
    this._startAngle = value;
    this.invalidate();
  }
}
