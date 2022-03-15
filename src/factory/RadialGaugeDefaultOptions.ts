import { AxisDefaultOptions } from "./AxisDefaultOptions";
import { GaugeDefaultOptions } from "./GaugeDefaultOptions";
import { NeedleDefaultOptions } from "./NeedleDefaultOptions";
import { PolarAxisDefaultOptions } from "./PolarAxisDefaultOptions";
import { RadialGaugeOptions } from "../display/RadialGaugeOptions";

export const RadialGaugeDefaultOptions: RadialGaugeOptions = {
  ...AxisDefaultOptions,
  ...GaugeDefaultOptions,
  ...NeedleDefaultOptions,
  ...PolarAxisDefaultOptions,
};
