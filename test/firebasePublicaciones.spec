/* import { firebaseCrearPublicacion } from '../src/lib/firebasePublicaciones';

const addDoc = jest.fn();


jest.mock('../src/firebaseConfig', () => ({
  getFirestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      add: jest.fn(), // utilizamos la función simulada
    })),
  })),
}));

describe('firebaseCrearPublicacion', () => {
  it('deberia agregar una nueva publicacion en la "Publicaciones" collection', async () => {
    const texto = 'cualquier cosa';
    await firebaseCrearPublicacion(texto);

    //se ha llamado con
    expect(addDoc).toHaveBeenCalledWith(
      // se espera que sea algun objeto
      expect.any(Object),
      // se espera que contenga un objeto con clave publicacion y el valor en texto
      expect.objectContaining({ publicacion: texto }),
    );
  });
});
 */