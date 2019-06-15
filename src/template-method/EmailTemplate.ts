import AbstractTemplate from "./AbstractTemplate";

export default class EmailTemplate extends AbstractTemplate {
  buildSender(): string {
    return `${this.sender.name} <${this.sender.email}>`;
  }
  buildReceiver(): string {
    return `${this.receiver.name} <${this.receiver.email}>`;
  }
}
