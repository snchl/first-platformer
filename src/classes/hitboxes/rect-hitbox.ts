import { Coordinate, Dimension } from "../../types";
import { Hitbox } from "./hitbox";

export class RectHitbox extends Hitbox {
  public dimension: Dimension;

  constructor(
    context: CanvasRenderingContext2D,
    position: Coordinate,
    dimension: Dimension
  ) {
    super(context, position);

    this.dimension = dimension;
  }

  public get width(): number {
    return this.dimension.width;
  }
  public get height(): number {
    return this.dimension.height;
  }

  public draw(): void {
    this.context.strokeStyle = this.strokeStyle;
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }
}
