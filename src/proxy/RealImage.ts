import Image from "./Image";
export default class RealImage implements Image {
  private _path: string;
  constructor(path: string) {
    this._path = path;
  }

  draw(): void {
    throw new Error("Method not implemented.");
  }

  get path(): string {
    return this._path;
  }
}
