import { methodB } from './module-b';

export const methodA = (): number => {
  const b = methodB();

  return b + 1;
};
