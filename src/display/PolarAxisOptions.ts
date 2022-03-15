import { AxisOptions } from "./AxisOptions";

/**
 * Polar Axis optional parameters
 */
export type PolarAxisOptions = AxisOptions & {
  radius?: number | undefined;
  spanAngle?: number | undefined;
  startAngle?: number | undefined;
};
