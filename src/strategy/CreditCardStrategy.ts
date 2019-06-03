import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardStrategy implements PaymentStrategy {
  private name: string | null;
  private cardNumber: string | null;
  private cvv: string | null;
  private dateOfExpiry: string | null;

  constructor() {
    this.name = window.prompt("이름");
    this.cardNumber = window.prompt("카드번호");
    this.cvv = window.prompt("cvv 번호");
    this.dateOfExpiry = window.prompt("유통기한");
  }

  public pay(amount: number): void {
    window.alert(`신용카드로 ${amount}원 결제`);
  }
}
