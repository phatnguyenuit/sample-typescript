import { methodA } from './module-a';

export const methodB = (): number => {
  const a = methodA();

  return a + 1;
};
