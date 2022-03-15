import { canvas, viewport } from "../Scene";
import { PolarAxis } from "../../../src";

export default {
  title: "Gauge/Axis",
};

export const Polar = () => {
  const axis = new PolarAxis();
  axis.x = viewport.screenWidth / 2;
  axis.y = viewport.screenHeight / 2;
  viewport.addChild(axis);

  return canvas;
};
