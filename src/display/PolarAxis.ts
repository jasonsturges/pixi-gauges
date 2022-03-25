import { AbstractPolarAxis } from "./AbstractPolarAxis";
import { DrawingUtils } from "../utils/DrawingUtils";
import { Graphics, ILineStyleOptions, LINE_CAP, LINE_JOIN, Text, TextStyle } from "pixi.js";
import { PolarAxisDefaultOptions } from "../factory/PolarAxisDefaultOptions";
import { PolarAxisOptions } from "./PolarAxisOptions";

export class PolarAxis extends AbstractPolarAxis {
  private _labelPool?: Text[] | undefined;
  private _labels?: Text[] | undefined;
  private readonly _graphics?: Graphics | undefined;

  /**
   * @constructor
   */
  constructor(options?: Partial<PolarAxisOptions>) {
    super({
      ...PolarAxisDefaultOptions,
      ...options,
    });

    this._graphics = new Graphics();
    this.addChild(this._graphics);

    this._labels = [];
    this._labelPool = [];
  }

  protected override validate() {
    super.validate();

    this._graphics?.clear();

    if (this.axisVisible) {
      this.renderTickMarks();
      this.renderAxis();
    }

    this.renderLabels();
  }

  /**
   * Render axis
   */
  renderAxis() {
    this._graphics?.lineStyle(<ILineStyleOptions>{
      alpha: this.axisAlpha,
      color: this.axisColor,
      width: this.axisWeight,
      cap: LINE_CAP.SQUARE,
      join: LINE_JOIN.MITER,
    });

    const radius = this.radius ?? 100;
    const spanAngle = this.spanAngle ?? 260;
    const startAngle = this.startAngle ?? 140;

    if (this._graphics) {
      DrawingUtils.drawArc(
        this._graphics,
        Math.cos((startAngle * Math.PI) / 180) * radius,
        Math.sin((startAngle * Math.PI) / 180) * radius,
        radius,
        -spanAngle,
        -startAngle,
      );
    }
  }

  /**
   * Render labels
   */
  renderLabels() {
    let label: Text;

    if (this._labels) {
      while (this._labels.length > 0) {
        label = this._labels.shift()!;
        this._labelPool?.push(label);
        this.removeChild(label);
      }
    }

    if (!this.axisLabelsVisible) {
      return;
    }

    const axisLabelFontAlpha = this.axisLabelFontAlpha ?? 1;
    const axisLabelFontColor = this.axisLabelFontColor ?? 0x313131;
    const axisLabelFontName = this.axisLabelFontName ?? "Arial";
    const axisLabelFontSize = this.axisLabelFontSize ?? 8;
    const axisLabelGap = this.axisLabelGap ?? 0.19;
    const majorTickCount = this.majorTickCount ?? 16;
    const maximum = this.maximum ?? 100;
    const minimum = this.minimum ?? 0;
    const precision = this.precision ?? 0;
    const radius = this.radius ?? 100;
    const spanAngle = this.spanAngle ?? 260;
    const startAngle = this.startAngle ?? 140;

    const interval: number = spanAngle / (majorTickCount - 1);
    const labelInterval: number = (maximum - minimum) / (majorTickCount - 1);
    const textStyle: TextStyle = new TextStyle({
      fontFamily: axisLabelFontName,
      fontSize: axisLabelFontSize,
      fill: axisLabelFontColor,
    });

    for (let i = 0, tickAngle = startAngle; i < majorTickCount; i++, tickAngle += interval) {
      let value: string = (minimum + labelInterval * i).toFixed(precision);

      if (this._labelPool && this._labelPool.length > 0) {
        label = this._labelPool.shift()!;
        label.text = value;
        label.style = textStyle;
        label.dirty = true;
      } else {
        label = new Text(value, textStyle);
      }

      this._labels?.push(label);
      this.addChild(label);

      label.alpha = axisLabelFontAlpha;
      label.resolution = 8;
      label.anchor.set(0.5, 0.5);
      label.position.set(
        Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap),
        Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap),
      );
    }
  }

  /**
   * Render tick marks
   */
  renderTickMarks() {
    const majorTickAlpha = this.majorTickAlpha ?? 1;
    const majorTickColor = this.majorTickColor ?? 0x313131;
    const majorTickCount = this.majorTickCount ?? 16;
    const majorTickLength = this.majorTickLength ?? 0.1;
    const majorTickWeight = this.minorTickWeight ?? 2;
    const minorTickAlpha = this.minorTickAlpha ?? 1;
    const minorTickColor = this.minorTickColor ?? 0x313131;
    const minorTickCount = this.minorTickCount ?? 4;
    const minorTickLength = this.minorTickLength ?? 0.05;
    const minorTickWeight = this.minorTickWeight ?? 1;
    const radius = this.radius ?? 100;
    const spanAngle = this.spanAngle ?? 260;
    const startAngle = this.startAngle ?? 140;

    const interval: number = spanAngle / (majorTickCount - 1);

    if (this._graphics) {
      for (let i = 0, tickAngle = startAngle; i < majorTickCount; i++, tickAngle += interval) {
        this._graphics.lineStyle(majorTickWeight, majorTickColor, majorTickAlpha);

        this._graphics.moveTo(
          Math.cos((tickAngle * Math.PI) / 180) * radius,
          Math.sin((tickAngle * Math.PI) / 180) * radius,
        );

        this._graphics.lineTo(
          Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength),
          Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength),
        );

        // minor tick marks
        this._graphics.lineStyle(minorTickWeight, minorTickColor, minorTickAlpha);

        let minorInterval: number = interval / (minorTickCount + 1);

        for (
          let j: number = 0, minorTickAngle: number = tickAngle + minorInterval;
          j < minorTickCount && i !== majorTickCount - 1;
          j++, minorTickAngle += minorInterval
        ) {
          this._graphics.moveTo(
            Math.cos((minorTickAngle * Math.PI) / 180) * radius,
            Math.sin((minorTickAngle * Math.PI) / 180) * radius,
          );

          this._graphics.lineTo(
            Math.cos((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength),
            Math.sin((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength),
          );
        }
      }
    }
  }
}
