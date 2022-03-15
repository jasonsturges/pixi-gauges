import { canvas, viewport } from "../Scene";
import { Needle } from "../../../src";
import { parseColor } from "../../../src/utils/ColorUtils";

export default {
  title: "Gauge/Needle",
  argTypes: {
    needleBaseWidth: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    needleFillAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    needleFillColor: { control: "color" },
    needleRadius: { control: { type: "range", min: 0, max: 100, step: 0.1 } },
    needleStrokeAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    needleStrokeColor: { control: "color" },
    needleStrokeWeight: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
    needleTipWidth: { control: { type: "range", min: 0, max: 50, step: 0.1 } },
  },
};

export const Default = ({
  needleBaseWidth,
  needleFillAlpha,
  needleFillColor,
  needleRadius,
  needleStrokeAlpha,
  needleStrokeColor,
  needleStrokeWeight,
  needleTipWidth,
}) => {
  const needle = new Needle();
  needle.needleBaseWidth = needleBaseWidth;
  needle.needleFillAlpha = needleFillAlpha;
  needle.needleFillColor = parseColor(needleFillColor);
  needle.needleRadius = needleRadius;
  needle.needleStrokeAlpha = needleStrokeAlpha;
  needle.needleStrokeColor = parseColor(needleStrokeColor);
  needle.needleStrokeWeight = needleStrokeWeight;
  needle.needleTipWidth = needleTipWidth;
  needle.x = viewport.screenWidth / 2;
  needle.y = viewport.screenHeight / 2;
  viewport.addChild(needle);

  return canvas;
};
Default.args = {
  needleBaseWidth: 4,
  needleFillAlpha: 1.0,
  needleFillColor: "#313131",
  needleRadius: 90,
  needleStrokeAlpha: 1.0,
  needleStrokeColor: "#ffffff",
  needleStrokeWeight: 1,
  needleTipWidth: 1,
};
