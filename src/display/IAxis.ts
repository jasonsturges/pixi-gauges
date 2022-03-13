export interface IAxis {
  axisAlpha: number;
  axisColor: number;
  axisLabelFontAlpha: number;
  axisLabelFontColor: number;
  axisLabelFontName: string;
  axisLabelFontSize: number;
  axisLabelGap: number;
  axisLabelsVisible: boolean;
  axisVisible: boolean;
  axisWeight: number;
  majorTickAlpha: number;
  majorTickColor: number;
  majorTickCount: number;
  majorTickLength: number;
  majorTickWeight: number;
  maximum: number;
  minimum: number;
  minorTickAlpha: number;
  minorTickColor: number;
  minorTickCount: number;
  minorTickLength: number;
  minorTickWeight: number;
  precision: number;

  renderAxis(): void;
  renderLabels(): void;
  renderTickMarks(): void;
}
