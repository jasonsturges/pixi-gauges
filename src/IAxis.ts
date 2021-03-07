export interface IAxis {
  autoAdjustMinMax: boolean;
  axisAlpha: number;
  axisColor: number;
  axisLabelFontAlpha: number;
  axisLabelFontColor: number;
  axisLabelFontName: string;
  axisLabelFontSize: number;
  axisLabelGap: number;
  axisWeight: number;
  baseAtZero: boolean;
  maximum: number;
  minimum: number;
  minorTickAlpha: number;
  minorTickColor: number;
  minorTickCount: number;
  minorTickLength: number;
  minorTickWeight: number;
  precision: number;
  showAxis: boolean;
  showAxisLabels: boolean;
  tickAlpha: number;
  tickColor: number;
  tickCount: number;
  tickLength: number;
  tickWeight: number;

  renderAxis(): void;
  renderLabels(): void;
  renderTickMarks(): void;
}
