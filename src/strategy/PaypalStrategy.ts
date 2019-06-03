import { PaymentStrategy } from "./PaymentStrategy";

export class PaypalStrategy implements PaymentStrategy {
  private emailId!: string | null;
  private password!: string | null;

  constructor() {
    this.emailId = window.prompt("이메일 입력");
    this.password = window.prompt("비밀번호 입력");
  }

  public pay(amount: number): void {
    window.alert(`Paypal로 ${amount}원 결제`);
  }
}
