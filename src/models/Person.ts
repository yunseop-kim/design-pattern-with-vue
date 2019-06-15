export default class Person {
  private _name!: string;
  private _phone!: string;
  private _email!: string;
  private _address!: string;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }
}
