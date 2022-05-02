import os from 'os';

import map from 'lodash/map';
import { v4 as uuidV4 } from 'uuid';

import { Person } from './types';
import { getPersonAge, getPersonAvatar } from './utils';

const PEOPLE: Person[] = [
  {
    id: uuidV4(),
    name: 'Fast Nguyen',
    email: 'fast.nguyen@work.com',
    dob: '1995-08-26',
  },
  {
    id: uuidV4(),
    name: 'Andrew Jackson',
    email: 'andrew.jackson@work.com',
    dob: '1990-01-12',
  },
];

console.log('=> running on:', os.platform());
console.log('=> people ids:', map(PEOPLE, 'id'));
console.log('=> people ages:', PEOPLE.map(getPersonAge));
console.log('=> people avatar:', PEOPLE.map(getPersonAvatar));
