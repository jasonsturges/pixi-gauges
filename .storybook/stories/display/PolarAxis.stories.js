import { canvas, viewport } from "../Scene";
import { parseColor } from "../../../src/utils/ColorUtils";
import { PolarAxis } from "../../../src";

export default {
  title: "Gauge/Axis",
  argTypes: {
    axisAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    axisColor: { control: "color" },
    axisLabelFontAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    axisLabelFontColor: { control: "color" },
    axisLabelFontName: { control: "text" },
    axisLabelFontSize: { control: { type: "range", min: 1, max: 72, step: 1 } },
    axisLabelGap: { control: { type: "range", min: -1, max: 1, step: 0.01 } },
    axisLabelsVisible: { control: "boolean" },
    axisVisible: { control: "boolean" },
    axisWeight: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    majorTickAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    majorTickColor: { control: "color" },
    majorTickCount: { control: { type: "range", min: 0, max: 10, step: 1 } },
    majorTickLength: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    majorTickWeight: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    maximum: { control: { type: "range", min: 0, max: 100, step: 1 } },
    minimum: { control: { type: "range", min: 0, max: 100, step: 1 } },
    minorTickAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    minorTickColor: { control: "color" },
    minorTickCount: { control: { type: "range", min: 0, max: 10, step: 1 } },
    minorTickLength: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    minorTickWeight: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    precision: { control: { type: "range", min: 0, max: 5, step: 1 } },
    radius: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    spanAngle: { control: { type: "range", min: -360, max: 360, step: 0.1 } },
    startAngle: { control: { type: "range", min: 0, max: 360, step: 0.1 } },
  },
};

export const Polar = ({
  axisAlpha,
  axisColor,
  axisLabelFontAlpha,
  axisLabelFontColor,
  axisLabelFontName,
  axisLabelFontSize,
  axisLabelGap,
  axisLabelsVisible,
  axisVisible,
  axisWeight,
  majorTickAlpha,
  majorTickColor,
  majorTickCount,
  majorTickLength,
  majorTickWeight,
  maximum,
  minimum,
  minorTickAlpha,
  minorTickColor,
  minorTickCount,
  minorTickLength,
  minorTickWeight,
  precision,
  radius,
  spanAngle,
  startAngle,
}) => {
  const axis = new PolarAxis();
  axis.radius = radius;
  axis.spanAngle = spanAngle;
  axis.startAngle = startAngle;
  axis.axisAlpha = axisAlpha;
  axis.axisColor = parseColor(axisColor);
  axis.axisLabelFontAlpha = axisLabelFontAlpha;
  axis.axisLabelFontColor = parseColor(axisLabelFontColor);
  axis.axisLabelFontName = axisLabelFontName;
  axis.axisLabelFontSize = axisLabelFontSize;
  axis.axisLabelGap = axisLabelGap;
  axis.axisLabelsVisible = axisLabelsVisible;
  axis.axisVisible = axisVisible;
  axis.axisWeight = axisWeight;
  axis.majorTickAlpha = majorTickAlpha;
  axis.majorTickColor = parseColor(majorTickColor);
  axis.majorTickCount = majorTickCount;
  axis.majorTickLength = majorTickLength;
  axis.majorTickWeight = majorTickWeight;
  axis.maximum = maximum;
  axis.minimum = minimum;
  axis.minorTickAlpha = minorTickAlpha;
  axis.minorTickColor = parseColor(minorTickColor);
  axis.minorTickCount = minorTickCount;
  axis.minorTickLength = minorTickLength;
  axis.minorTickWeight = minorTickWeight;
  axis.precision = precision;
  axis.x = viewport.screenWidth / 2;
  axis.y = viewport.screenHeight / 2;
  viewport.addChild(axis);

  return canvas;
};
Polar.args = {
  axisAlpha: 1,
  axisColor: "#313131",
  axisLabelFontAlpha: 1,
  axisLabelFontColor: "#313131",
  axisLabelFontName: "Arial",
  axisLabelFontSize: 8,
  axisLabelGap: 0.19,
  axisLabelsVisible: true,
  axisVisible: true,
  axisWeight: 2,
  majorTickAlpha: 1,
  majorTickColor: "#313131",
  majorTickCount: 16,
  majorTickLength: 0.1,
  majorTickWeight: 2,
  maximum: 100,
  minimum: 0,
  minorTickAlpha: 1,
  minorTickColor: "#313131",
  minorTickCount: 4,
  minorTickLength: 0.05,
  minorTickWeight: 1,
  precision: 0,
  radius: 100,
  spanAngle: 260,
  startAngle: 140,
};
