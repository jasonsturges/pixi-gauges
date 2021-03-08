import * as PIXI from "pixi.js";
import { IControl } from "./IControl";

export abstract class AbstractControl extends PIXI.Sprite implements IControl {
  _dirty: boolean = true;

  /**
   * @constructor
   */
  constructor() {
    super();
    this._dirty = true;
  }
}
