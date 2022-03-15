import { AxisOptions } from "./AxisOptions";
import { GaugeOptions } from "./GaugeOptions";
import { NeedleOptions } from "./NeedleOptions";
import { PolarAxisOptions } from "./PolarAxisOptions";

/**
 * Radial Gauge optional parameters
 */
export type RadialGaugeOptions = AxisOptions & GaugeOptions & NeedleOptions & PolarAxisOptions;
