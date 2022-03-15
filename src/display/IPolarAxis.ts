import { IAxis } from "./IAxis";

export interface IPolarAxis extends IAxis {
  radius?: number | undefined;
  spanAngle?: number | undefined;
  startAngle?: number | undefined;
}
