import { Renderer, Sprite } from "pixi.js";

export abstract class AbstractControl extends Sprite {
  private _invalidated?: boolean | undefined;

  /**
   * Constructor
   */
  protected constructor() {
    super();
    this._invalidated = false;
  }

  /**
   * Invalidate component, forcing validation on next render cycle.
   */
  protected invalidate() {
    this._invalidated = true;
  }

  /**
   * Render override for invalidation pipeline.
   */
  override render(renderer: Renderer) {
    super.render(renderer);

    if (this._invalidated) {
      this.validate();
    }
  }

  /**
   * Validation pipeline.
   */
  protected validate() {
    this._invalidated = false;
  }
}
