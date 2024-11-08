import { RectHitbox } from "../hitboxes";
import { ActionAsset, Character } from "./character";

type KnightAction = "idle" | "run";

const assets: Record<KnightAction, ActionAsset> = {
  idle: {
    asset: "assets/knight/_Idle.png",
    frames: 10,
    rectHitboxes: [],
    circleHitboxes: [],
  },
  run: {
    asset: "assets/knight/_Run.png",
    frames: 10,
    rectHitboxes: [],
    circleHitboxes: [],
  },
};

export class Knight extends Character<KnightAction> {
  constructor(context: CanvasRenderingContext2D) {
    super(
      context,
      { width: 120, height: 80 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      "idle",
      assets,
      0
    );
  }
}
