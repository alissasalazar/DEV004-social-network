// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';
import { signIn } from '../src/lib/signIn.js';

jest.mock("../src/lib/barrel.js", () => ({
  getAuth: jest.fn(),
  getDatabase: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock("../src/firebaseConfig.js", () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('return true', () => {
    expect(signIn()).toEqual(true)
  })
})

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
