import { methodA } from './module-a';

export const methodC = (): number => {
  const a = methodA();

  return a + 1;
};
