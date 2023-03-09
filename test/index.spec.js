// importamos la funcion que vamos a testear
import { signIn } from '../src/lib/signIn.js';
import * as barrel from '../src/lib/barrel.js'
import onNavigate from "../src/lib/onNavigate.js";

jest.mock('../src/lib/barrel.js', () => ({
  getAuth: jest.fn(),
  getDatabase: jest.fn(),
  update: jest.fn(),
  ref: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

global.alert = jest.fn()

jest.mock('../src/firebaseConfig.js', () => ({
  initializeApp: jest.fn(),
}));

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function')
  })
  it('usuario logueado', () => {
    barrel.signInWithEmailAndPassword.mockImplementation(jest.fn(() => Promise.resolve({ user: { uid: '3zs*MOCK*sT2' } })))
    expect(signIn()).toEqual(Promise.resolve(true))
  })
  it('error', () => {
    barrel.signInWithEmailAndPassword.mockImplementation(jest.fn(() => Promise.resolve({ errorMessage: { message: 'MOCKerror' } })))
    expect(signIn()).toEqual(Promise.resolve(false))
  })
})

describe("pruebas de interfaz", () => {
  it.only('Login con usuario registrado', () => {
    // 1  "Mostrar" la interfaz de login
    onNavigate('/login')
    // 2. compeltar el input de correo
    // 3. completar el input de contraseña
    // 4. Darrle clic al boton de login
    // 5. Confirmar que se haga la redireccion a /muro
  })
  /* it('Login con usuario no registrado', () => {
    expect('').toBe('')
  }) */
})
afterEach(() => {
  jest.clearAllMocks()
})
