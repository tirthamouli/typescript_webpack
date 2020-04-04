export default class User {
    id: number = 0;

    firstName: string = '';

    lastName: string = '';

    age: number = 0;

    getName() {
      return `${this.firstName} ${this.lastName}`;
    }

    isAdult() {
      return this.age > 36 && this.age < 60;
    }
}
