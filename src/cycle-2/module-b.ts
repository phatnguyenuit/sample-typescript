import { methodC } from './module-c';

export const methodB = (): number => {
  const c = methodC();

  return c + 1;
};
