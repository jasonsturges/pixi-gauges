import * as PIXI from "pixi.js";
import { AbstractPolarAxis } from "./AbstractPolarAxis";
import { DrawingUtils } from "./utils/DrawingUtils";

export class PolarAxis extends AbstractPolarAxis {
  private readonly _graphics: PIXI.Graphics;
  private _labelPool: PIXI.Text[];
  private _labels: PIXI.Text[];

  /**
   * Center of polar axis
   */
  protected get center(): PIXI.Point {
    return new PIXI.Point(this.axisWidth * 0.5, this.axisHeight * 0.5);
  }

  /**
   * @constructor
   */
  constructor() {
    super();

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

    if (!this.dirty) return;
    this.dirty = false;

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
      this.center.x + Math.cos((this.startAngle * Math.PI) / 180) * this.radius,
      this.center.y + Math.sin((this.startAngle * Math.PI) / 180) * this.radius,
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
      center,
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
        center.x + Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap),
        center.y + Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * axisLabelGap)
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
      center,
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
        center.x + Math.cos((tickAngle * Math.PI) / 180) * radius,
        center.y + Math.sin((tickAngle * Math.PI) / 180) * radius
      );

      _graphics.lineTo(
        center.x + Math.cos((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength),
        center.y + Math.sin((tickAngle * Math.PI) / 180) * (radius - radius * majorTickLength)
      );

      // minor tick marks
      _graphics.lineStyle(minorTickWeight, minorTickColor, minorTickAlpha);

      let minorInterval: number = interval / (minorTickCount + 1);

      for (let j: number = 0, minorTickAngle: number = tickAngle + minorInterval; j < minorTickCount && i !== majorTickCount - 1; j++, minorTickAngle += minorInterval) {
        _graphics.moveTo(
          center.x + Math.cos((minorTickAngle * Math.PI) / 180) * radius,
          center.y + Math.sin((minorTickAngle * Math.PI) / 180) * radius
        );

        _graphics.lineTo(
          center.x + Math.cos((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength),
          center.y + Math.sin((minorTickAngle * Math.PI) / 180) * (radius - radius * minorTickLength)
        );
      }
    }
  }
}
