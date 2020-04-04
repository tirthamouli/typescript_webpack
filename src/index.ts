import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import User from './user.model';

// Some thing we get from the server
const userData = [{
  id: 1,
  firstName: 'Johny',
  lastName: 'Cage',
  age: 27,
},
{
  id: 2,
  firstName: 'Ismoil',
  lastName: 'Somoni',
  age: 50,
},
{
  id: 3,
  firstName: 'Luke',
  lastName: 'Dacascos',
  age: 12,
}];

const populatedUsers = plainToClass(User, userData);

populatedUsers.forEach((user) => {
  // eslint-disable-next-line no-console
  console.log('Name:', user.getName(), '\nIs adult:', user.isAdult());
});
