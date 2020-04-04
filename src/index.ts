import {
  IsNotEmpty, IsNumber, IsPositive, validate,
} from 'class-validator';

class User {
    @IsPositive()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsPositive()
    @IsNumber()
    age: number;

    constructor(id: number, firstName: string, lastName: string, age: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    getName() {
      return `${this.firstName} ${this.lastName}`;
    }

    isAdult() {
      return this.age > 36 && this.age < 60;
    }
}

const user = new User(1, 'Tirthamouli', 'Baidya', -23);

validate(user).then((errors) => {
  if (errors.length > 0) {
    // eslint-disable-next-line no-console
    console.log(errors);
  } else {
    // eslint-disable-next-line no-console
    console.log(user);
  }
});
