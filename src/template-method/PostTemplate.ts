import AbstractTemplate from "./AbstractTemplate";

export default class PostTemplate extends AbstractTemplate {
  buildSender(): string {
    return `${this.sender.address} ${this.sender.name}`;
  }
  buildReceiver(): string {
    return `${this.receiver.address} ${this.receiver.name}`;
  }
}
