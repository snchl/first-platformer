import { Coordinate } from "../../types";

export abstract class Hitbox {
  protected context: CanvasRenderingContext2D;

  public position: Coordinate;

  protected strokeStyle: string;

  constructor(
    context: CanvasRenderingContext2D,
    position: Coordinate,
    strokeStyle: string = "#FF0000"
  ) {
    this.context = context;

    this.position = position;
    this.strokeStyle = strokeStyle;
  }

  public get x(): number {
    return this.position.x;
  }
  public get y(): number {
    return this.position.y;
  }

  public abstract draw(): void;
}
