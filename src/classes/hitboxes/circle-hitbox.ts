import { Coordinate } from "../../types";
import { Hitbox } from "./hitbox";

export class CircleHitbox extends Hitbox {
  public radius: number;

  constructor(
    context: CanvasRenderingContext2D,
    position: Coordinate,
    radius: number
  ) {
    super(context, position);

    this.radius = radius;
  }

  public draw(): void {
    this.context.strokeStyle = this.strokeStyle;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.stroke();
  }
}
