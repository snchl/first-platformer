import { Knight } from "./classes/character/knight";

export default class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private knight: Knight;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) {
      throw new Error("Canvas missing");
    }
    this.canvas = canvas;

    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Context missing");
    }
    this.context = context;

    this.knight = new Knight(this.context);
  }

  private get width(): number {
    return this.canvas.width;
  }
  private get height(): number {
    return this.canvas.height;
  }

  private clearCanvas(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  public init(): void {
    window.requestAnimationFrame((timestamp: number) => this.loop(timestamp));
  }

  public loop(timestamp: number): void {
    this.update(timestamp);
    this.draw();

    window.requestAnimationFrame((timestamp: number) => this.loop(timestamp));
  }

  public update(timestamp: number): void {
    this.knight.update();
  }

  public draw(): void {
    this.clearCanvas();

    this.knight.draw();
  }
}
