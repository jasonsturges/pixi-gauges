import * as PIXI from "pixi.js";
import { AbstractPolarAxis } from "./AbstractPolarAxis";
import { DrawingUtils } from "../utils/DrawingUtils";
import { PolarAxisOptions } from "./PolarAxisOptions";

export class PolarAxis extends AbstractPolarAxis {
  private readonly _graphics: PIXI.Graphics;
  private _labelPool: PIXI.Text[];
  private _labels: PIXI.Text[];

  /**
   * @constructor
   */
  constructor(options: Partial<PolarAxisOptions> = {}) {
    super();

    this.set(options);

    this._graphics = new PIXI.Graphics();
    this.addChild(this._graphics);

    this._labels = new Array<PIXI.Text>();
    this._labelPool = new Array<PIXI.Text>();
  }

  /**
   * @override
   * @param renderer
   */
  public render(renderer: PIXI.Renderer) {
    super.render(renderer);

    if (!this._dirty) return;
    this._dirty = false;
    this._graphics.clear();

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
    const { _graphics } = this;

    _graphics.lineStyle(this.axisWeight, this.axisColor, this.axisAlpha);

    DrawingUtils.drawArc(
      _graphics,
      Math.cos((this.startAngle * Math.PI) / 180) * this.radius,
      Math.sin((this.startAngle * Math.PI) / 180) * this.radius,
      this.radius,
      -this.spanAngle,
      -this.startAngle
    );
  }

  /**
   * Render labels
   */
  renderLabels() {
    const {
      _labelPool,
      _labels,
      axisLabelFontAlpha,
      axisLabelFontColor,
      axisLabelFontName,
      axisLabelFontSize,
      axisLabelGap,
      maximum,
      minimum,
      majorTickCount,
      precision,
      spanAngle,
      startAngle,
      radius,
    } = this;

    let label: PIXI.Text;

    while (_labels.length > 0) {
      label = _labels.shift()!;
      _labelPool.push(label);
      this.removeChild(label);
    }

    if (!this.axisLabelsVisible) {
      return;
    }

    const interval: number = spanAngle / (majorTickCount - 1);
    const labelInterval: number = (maximum - minimum) / (majorTickCount - 1);
    const textStyle: PIXI.TextStyle = new PIXI.TextStyle({
      fontFamily: axisLabelFontName,
      fill: axisLabelFontColor,
      fontSize: axisLabelFontSize,
    });

    for (let i = 0, tickAngle = startAngle; i < majorTickCount; i++, tickAngle += interval) {
      let value: string = (minimum + labelInterval * i).toFixed(precision);

      if (_labelPool.length > 0) {
        label = _labelPool.shift()!;
        label.text = value;
        label.style = textStyle;
        label.dirty = true;
      } else {
        label = new PIXI.Text(value, textStyle);
      }

      _labels.push(label);
      this.addChild(label);

      label.alpha = axisLabelFontAlpha;
      label.resolution = 8;
      label.anchor.set(0.5, 0.5);
      label.position.set(
        Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap),
        Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap)
      );
    }

    while (_labelPool.length > 0) {
      label = _labelPool.shift()!;
    }
  }

  /**
   * Render tick marks
   */
  renderTickMarks() {
    const {
      _graphics,
      minorTickAlpha,
      minorTickColor,
      minorTickCount,
      minorTickLength,
      minorTickWeight,
      majorTickAlpha,
      majorTickColor,
      majorTickCount,
      majorTickLength,
      majorTickWeight,
      spanAngle,
      startAngle,
      radius,
    } = this;

    const interval: number = spanAngle / (majorTickCount - 1);

    for (let i = 0, tickAngle = startAngle; i < majorTickCount; i++, tickAngle += interval) {
      _graphics.lineStyle(majorTickWeight, majorTickColor, majorTickAlpha);

      _graphics.moveTo(
        Math.cos((tickAngle * Math.PI) / 180) * radius,
        Math.sin((tickAngle * Math.PI) / 180) * radius
      );

      _graphics.lineTo(
        Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength),
        Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength)
      );

      // minor tick marks
      _graphics.lineStyle(minorTickWeight, minorTickColor, minorTickAlpha);

      let minorInterval: number = interval / (minorTickCount + 1);

      for (let j: number = 0, minorTickAngle: number = tickAngle + minorInterval; j < minorTickCount && i !== majorTickCount - 1; j++, minorTickAngle += minorInterval) {
        _graphics.moveTo(
          Math.cos((minorTickAngle * Math.PI) / 180) * radius,
          Math.sin((minorTickAngle * Math.PI) / 180) * radius
        );

        _graphics.lineTo(
          Math.cos((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength),
          Math.sin((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength)
        );
      }
    }
  }

  /**
   * Apply axis options
   * @param {PolarAxisOptions} options - Options to be applied
   */
  public set(options: Partial<PolarAxisOptions> = {}) {
    Object.assign(this,options);
    this._dirty = true;
  }
}
