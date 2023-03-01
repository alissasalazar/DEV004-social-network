// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';
import { signIn } from '../src/lib/signIn.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});
