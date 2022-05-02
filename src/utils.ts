import dayjs from 'dayjs';

import { Person } from './types';

export const getPersonAge = (person: Person): number => {
  return dayjs().diff(dayjs(person.dob), 'year');
};

export const getPersonAvatar = (person: Person) =>
  `https://robohash.org/${person.id}`;
