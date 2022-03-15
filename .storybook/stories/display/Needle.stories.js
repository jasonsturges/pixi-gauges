import { canvas, viewport } from "../Scene";
import { Needle} from "../../../src";
import { parseColor } from "../../../src/utils/ColorUtils";

export default {
  title: "Gauge/Needle",
  argTypes: {
    needleBaseWidth: { control: "number" },
    needleFillAlpha: { control: "number" },
    needleFillColor: { control: "color" },
    needleRadius: { control: "number" },
    needleStrokeAlpha: { control: "number" },
    needleStrokeColor: { control: "color" },
    needleStrokeWeight: { control: "number" },
    needleTipWidth: { control: "number" },
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
