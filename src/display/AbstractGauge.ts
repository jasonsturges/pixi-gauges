import { AbstractControl } from "./AbstractControl";
import { IGauge } from "./IGauge";
import { GaugeOptions } from "./GaugeOptions";

export abstract class AbstractGauge extends AbstractControl implements IGauge {
  private _autoAdjustMinMax: boolean | undefined;
  private _minimum: number | undefined;
  private _maximum: number | undefined;
  private _value: number | undefined;

  /**
   * Constructor
   */
  protected constructor(options?: Partial<GaugeOptions>) {
    super();

    this.autoAdjustMinMax = options?.autoAdjustMinMax;
    this.maximum = options?.maximum;
    this.minimum = options?.minimum;
    this.value = options?.value;
  }

  /**
   * Validate
   */
  protected override validate() {
    super.validate();

    if (this.autoAdjustMinMax) {
      if (this.value && this.maximum && this.value > this.maximum) {
        this.maximum = this.value;
      }
      if (this.value && this.minimum && this.value < this.minimum) {
        this.minimum = this.value;
      }
    }
  }

  //------------------------------
  //  properties
  //------------------------------

  /**
   * autoAdjustMinMax
   */
  get autoAdjustMinMax() {
    return this._autoAdjustMinMax;
  }

  set autoAdjustMinMax(value) {
    if (this._autoAdjustMinMax === value) return;
    this._autoAdjustMinMax = value;
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
   * value
   */
  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value === value) return;
    this._value = value;
    this.invalidate();
  }
}
