import { AbstractRadialGauge } from "./AbstractRadialGauge";
import { Needle } from "./Needle";
import { PolarAxis } from "./PolarAxis";
import { RadialGaugeDefaultOptions } from "../factory/RadialGaugeDefaultOptions";
import { RadialGaugeOptions } from "./RadialGaugeOptions";

export class RadialGauge extends AbstractRadialGauge {
  private readonly _needle?: Needle;
  private readonly _polarAxis?: PolarAxis;

  protected constructor(options?: Partial<RadialGaugeOptions>) {
    super({
      ...RadialGaugeDefaultOptions,
      ...options,
    });

    this._needle = new Needle();
    this.addChild(this._needle);

    this._polarAxis = new PolarAxis();
    this.addChild(this._polarAxis);
  }

  protected override validate() {
    super.validate();

    // PolarAxis validation
    if (this._polarAxis) {
      this._polarAxis.axisAlpha = this.axisAlpha;
      this._polarAxis.axisColor = this.axisColor;
      this._polarAxis.axisLabelFontAlpha = this.axisLabelFontAlpha;
      this._polarAxis.axisLabelFontColor = this.axisLabelFontColor;
      this._polarAxis.axisLabelFontName = this.axisLabelFontName;
      this._polarAxis.axisLabelFontSize = this.axisLabelFontSize;
      this._polarAxis.axisLabelGap = this.axisLabelGap;
      this._polarAxis.axisLabelsVisible = this.axisLabelsVisible;
      this._polarAxis.axisVisible = this.axisVisible;
      this._polarAxis.axisWeight = this.axisWeight;
      this._polarAxis.majorTickAlpha = this.majorTickAlpha;
      this._polarAxis.majorTickColor = this.majorTickColor;
      this._polarAxis.majorTickCount = this.majorTickCount;
      this._polarAxis.majorTickLength = this.majorTickLength;
      this._polarAxis.majorTickWeight = this.majorTickWeight;
      this._polarAxis.maximum = this.maximum;
      this._polarAxis.minimum = this.minimum;
      this._polarAxis.minorTickAlpha = this.minorTickAlpha;
      this._polarAxis.minorTickColor = this.minorTickColor;
      this._polarAxis.minorTickCount = this.minorTickCount;
      this._polarAxis.minorTickLength = this.minorTickLength;
      this._polarAxis.minorTickWeight = this.minorTickWeight;
      this._polarAxis.precision = this.precision;
      this._polarAxis.radius = this.radius;
      this._polarAxis.spanAngle = this.spanAngle;
      this._polarAxis.startAngle = this.startAngle;
    }

    // Needle validation
    if (this._needle) {
      this._needle.needleBaseWidth = this.needleBaseWidth;
      this._needle.needleFillAlpha = this.needleFillAlpha;
      this._needle.needleFillColor = this.needleFillColor;
      this._needle.needleRadius = this.needleRadius;
      this._needle.needleStrokeAlpha = this.needleStrokeAlpha;
      this._needle.needleStrokeColor = this.needleStrokeColor;
      this._needle.needleStrokeWeight = this.needleStrokeWeight;
      this._needle.needleTipWidth = this.needleTipWidth;
    }

    const maximum = this.maximum ?? 100;
    const minimum = this.minimum ?? 0;
    const spanAngle = this.spanAngle ?? 260;
    const startAngle = this.startAngle ?? 140;
    const value = this.value ?? 0;

    const target: number = startAngle + spanAngle * ((value - minimum) / (maximum - minimum));

    if (this._needle) {
      if (isNaN(target)) {
        this._needle.angle = startAngle;
      } else {
        this._needle.angle = target;
      }
    }
  }
}
