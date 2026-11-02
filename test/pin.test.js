import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Pruebas del PIN', () => {

    it('debe aceptar un PIN de 4 dígitos', () => {
        let resultado = esPinValido('1234');
        expect(resultado).toBe(true);
    });

    it('debe aceptar un PIN de 6 dígitos', () => {
        let resultado = esPinValido('123456');
        expect(resultado).toBe(true);
    });

    it('debe rechazar un PIN con todos los dígitos iguales', () => {
        let resultado = esPinValido('1111');
        expect(resultado).toBe(false);
    });

    it('debe rechazar un PIN con letras', () => {
        let resultado = esPinValido('12a4');
        expect(resultado).toBe(false);
    });

    it('debe rechazar un PIN con espacios', () => {
        let resultado = esPinValido('12 4');
        expect(resultado).toBe(false);
    });

    it('debe rechazar un número en lugar de un texto', () => {
        let resultado = esPinValido(1234);
        expect(resultado).toBe(false);
    });

});
