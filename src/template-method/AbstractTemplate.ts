import Person from "../models/Person";
export default abstract class AbstractTemplate {
  protected sender: Person;
  protected receiver: Person;
  private message: string;

  constructor(sender: Person, receiver: Person, message: string) {
    this.sender = sender;
    this.receiver = receiver;
    this.message = message;
  }

  abstract buildSender(): string;
  abstract buildReceiver(): string;
  public build(): string {
    const from: string = this.buildSender();
    const to: string = this.buildReceiver();

    return `발신: ${from}
    
    ${this.message}

    수신: ${to}
    `;
  }
}
