import AbstractTemplate from "./AbstractTemplate";

export default class SMSTemplate extends AbstractTemplate {
  buildSender(): string {
    return `${this.sender.name} (${this.sender.phone})`;
  }
  buildReceiver(): string {
    return `${this.receiver.name} (${this.receiver.phone})`;
  }
}
