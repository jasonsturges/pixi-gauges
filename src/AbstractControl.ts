import * as PIXI from "pixi.js";
import { IControl } from "./IControl";

export abstract class AbstractControl extends PIXI.Sprite implements IControl {
  protected _invalidated: boolean = true;

  invalidate() {
    this._invalidated = true;
  }
}
