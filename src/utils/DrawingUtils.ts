import { Graphics } from "pixi.js";

export class DrawingUtils {
  /**
   * Draw arc segments
   *
   * @param target - Target graphic instances
   * @param x - Center point x-coordinate
   * @param y - Center point y-coordinate
   * @param radius - Radius of the arc
   * @param arc - Length of arc, in degrees
   * @param startAngle - Start angle of arc, in degrees
   * @param yRadius - Vertical radius, if different than radius
   */
  public static drawArc(
    target: Graphics,
    x: number,
    y: number,
    radius: number,
    arc: number,
    startAngle: number = 0,
    yRadius: number = 0,
  ): void {
    if (startAngle === 0) {
      startAngle = 0;
    }
    if (yRadius === 0) {
      yRadius = radius;
    }

    let segAngle: number,
      theta: number,
      angle: number,
      angleMid: number,
      segs: number,
      ax: number,
      ay: number,
      bx: number,
      by: number,
      cx: number,
      cy: number;

    segs = Math.ceil(Math.abs(arc) / 45);
    segAngle = arc / segs;
    theta = -(segAngle / 180) * Math.PI;
    angle = -(startAngle / 180) * Math.PI;
    ax = x - Math.cos(angle) * radius;
    ay = y - Math.sin(angle) * yRadius;
    if (segs > 0) {
      target.moveTo(x, y);
      for (let i = 0; i < segs; ++i) {
        angle += theta;
        angleMid = angle - theta / 2;
        bx = ax + Math.cos(angle) * radius;
        by = ay + Math.sin(angle) * yRadius;
        cx = ax + Math.cos(angleMid) * (radius / Math.cos(theta / 2));
        cy = ay + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
        target.quadraticCurveTo(cx, cy, bx, by);
      }
    }
  }
}
