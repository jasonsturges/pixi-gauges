import { canvas, viewport } from "../Scene";
import { parseColor } from "../../../src/utils/ColorUtils";
import { RadialGauge } from "../../../src";

export default {
  title: "Gauge/Radial Gauge",
  argTypes: {
    autoAdjustMinMax: { control: "boolean" },
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
    needleBaseWidth: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    needleFillAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    needleFillColor: { control: "color" },
    needleRadius: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    needleStrokeAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    needleStrokeColor: { control: "color" },
    needleStrokeWeight: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    needleTipWidth: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    precision: { control: { type: "range", min: 0, max: 5, step: 1 } },
    radius: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    spanAngle: { control: { type: "range", min: -360, max: 360, step: 0.1 } },
    startAngle: { control: { type: "range", min: 0, max: 360, step: 0.1 } },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export const Default = ({
  autoAdjustMinMax,
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
  needleBaseWidth,
  needleFillAlpha,
  needleFillColor,
  needleRadius,
  needleStrokeAlpha,
  needleStrokeColor,
  needleStrokeWeight,
  needleTipWidth,
  precision,
  radius,
  spanAngle,
  startAngle,
  value,
}) => {
  const gauge = new RadialGauge();
  gauge.autoAdjustMinMax = autoAdjustMinMax;
  gauge.axisAlpha = axisAlpha;
  gauge.axisColor = parseColor(axisColor);
  gauge.axisLabelFontAlpha = axisLabelFontAlpha;
  gauge.axisLabelFontColor = parseColor(axisLabelFontColor);
  gauge.axisLabelFontName = axisLabelFontName;
  gauge.axisLabelFontSize = axisLabelFontSize;
  gauge.axisLabelGap = axisLabelGap;
  gauge.axisLabelsVisible = axisLabelsVisible;
  gauge.axisVisible = axisVisible;
  gauge.axisWeight = axisWeight;
  gauge.majorTickAlpha = majorTickAlpha;
  gauge.majorTickColor = parseColor(majorTickColor);
  gauge.majorTickCount = majorTickCount;
  gauge.majorTickLength = majorTickLength;
  gauge.majorTickWeight = majorTickWeight;
  gauge.maximum = maximum;
  gauge.minimum = minimum;
  gauge.minorTickAlpha = minorTickAlpha;
  gauge.minorTickColor = parseColor(minorTickColor);
  gauge.minorTickCount = minorTickCount;
  gauge.minorTickLength = minorTickLength;
  gauge.minorTickWeight = minorTickWeight;
  gauge.precision = precision;
  gauge.needleBaseWidth = needleBaseWidth;
  gauge.needleFillAlpha = needleFillAlpha;
  gauge.needleFillColor = parseColor(needleFillColor);
  gauge.needleRadius = needleRadius;
  gauge.needleStrokeAlpha = needleStrokeAlpha;
  gauge.needleStrokeColor = parseColor(needleStrokeColor);
  gauge.needleStrokeWeight = needleStrokeWeight;
  gauge.needleTipWidth = needleTipWidth;
  gauge.radius = radius;
  gauge.spanAngle = spanAngle;
  gauge.startAngle = startAngle;
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
  minorTickAlpha: 1,
  minorTickColor: "#313131",
  minorTickCount: 4,
  minorTickLength: 0.05,
  minorTickWeight: 1,
  precision: 0,
  radius: 100,
  spanAngle: 260,
  startAngle: 140,
  needleBaseWidth: 4,
  needleFillAlpha: 1.0,
  needleFillColor: "#313131",
  needleRadius: 90,
  needleStrokeAlpha: 1.0,
  needleStrokeColor: "#ffffff",
  needleStrokeWeight: 1,
  needleTipWidth: 1,
};
