import { AbstractControl } from "./AbstractControl";
import { IGauge } from "./IGauge";
import PIXI from "pixi.js";

export abstract class AbstractGauge extends AbstractControl implements IGauge {
  protected _autoAdjustMinMax: boolean = true;
  protected _maximum: number = 100;
  protected _minimum: number = 0;
  protected _value: number = 0;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * autoAdjustMinMax
   */
  get autoAdjustMinMax(): boolean {
    return this._autoAdjustMinMax;
  }

  set autoAdjustMinMax(value: boolean) {
    if (this._autoAdjustMinMax === value) return;

    this._autoAdjustMinMax = value;
    this._dirty = true;
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
    this._dirty = true;
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
    this._dirty = true;
  }

  /**
   * minimum
   */
  get value(): number {
    return this._value;
  }

  set value(value: number) {
    if (this._value === value) return;

    this._value = value;
    this._dirty = true;
  }

  /**
   * @override
   * @param renderer
   */
  public render(renderer: PIXI.Renderer) {
    super.render(renderer);

    if (!this._dirty) return;

    if (this.autoAdjustMinMax) {
      if (this.value > this.maximum) {
        this.maximum = this.value;
      }
      if (this.value < this.minimum) {
        this.minimum = this.value;
      }
    }
  }
}
