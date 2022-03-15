import { canvas, viewport } from "../Scene";
import { RadialGauge } from "../../../src";

export default {
  title: "Gauge/Radial Gauge",
  argTypes: {
    autoAdjustMinMax: { control: "boolean" },
    maximum: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    minimum: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export const Default = ({ autoAdjustMinMax, maximum, minimum, value }) => {
  const gauge = new RadialGauge();
  gauge.autoAdjustMinMax = autoAdjustMinMax;
  gauge.maximum = maximum;
  gauge.minimum = minimum;
  gauge.value = value;
  gauge.x = viewport.screenWidth / 2;
  gauge.y = viewport.screenHeight / 2;
  viewport.addChild(gauge);

  return canvas;
};
Default.args = {
  autoAdjustMinMax: true,
  maximum: 100,
  minimum: 0,
  value: 0,
};
