import { Coordinate, Dimension } from "../../types";
import { CircleHitbox, RectHitbox } from "../hitboxes/";

export type ActionAsset = {
  asset: string;
  frames: number;
  rectHitboxes: RectHitbox[];
  circleHitboxes: CircleHitbox[];
};

export abstract class Character<A extends string> {
  protected context: CanvasRenderingContext2D;

  public dimension: Dimension;

  public position: Coordinate;
  public gravity: Coordinate;
  public velocity: Coordinate;

  public action: A;
  public actionAsset: Record<A, ActionAsset>;
  public frameIndex: number;

  constructor(
    context: CanvasRenderingContext2D,
    dimension: Dimension,
    position: Coordinate,
    gravity: Coordinate,
    velocity: Coordinate,
    action: A,
    actionAsset: Record<A, ActionAsset>,
    frameIndex: number
  ) {
    this.context = context;

    this.dimension = dimension;

    this.position = position;
    this.gravity = gravity;
    this.velocity = velocity;

    this.action = action;
    this.actionAsset = actionAsset;
    this.frameIndex = frameIndex;
  }

  public get width(): number {
    return this.dimension.width;
  }

  public get height(): number {
    return this.dimension.height;
  }

  public get x(): number {
    return this.position.x;
  }

  public get y(): number {
    return this.position.y;
  }

  protected get frameCount(): number {
    return this.actionAsset[this.action].frames;
  }

  protected get asset(): HTMLImageElement {
    const img = new Image();
    img.src = this.actionAsset[this.action].asset;

    return img;
  }

  protected nextFrame(): void {
    this.frameIndex =
      0 | (performance.now() * (this.frameCount / 1000)) % this.frameCount;
  }

  public update(): void {}

  public draw(): void {
    this.context.drawImage(
      this.asset,
      this.width * this.frameIndex,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
