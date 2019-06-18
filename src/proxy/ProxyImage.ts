import Image from "./Image";
import RealImage from "./RealImage";
export default class ProxyImage implements Image {
  private _path: string;
  private image!: RealImage;
  constructor(path: string) {
    this._path = path;
  }

  draw(): void {
    if (!this.image) {
      this.image = new RealImage(this._path);
    }
    this.image.draw();
  }

  get path(): string {
    return this._path;
  }
}
