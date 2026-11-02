import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci(n)', () => {

    it('debe devolver 0 cuando n es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('debe devolver 1 cuando n es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debe devolver 1 cuando n es 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('Fibonacci de 3 debe ser 2', () => {
        let resultado = fibonacci(3);
        expect(resultado).toBe(2);
    });

    it('Fibonacci de 4 debe ser 3', () => {
        let resultado = fibonacci(4);
        expect(resultado).toBe(3);
    });

        it('Fibonacci de 5 debe ser 5', () => {
        let resultado = fibonacci(5);
        expect(resultado).toBe(5);
    });

    it('Fibonacci de 10 debe ser 55', () => {
        let resultado = fibonacci(10);
        expect(resultado).toBe(55);
    });

    it('Fibonacci de 78 debe ser 8944394323791464', () => {
        let resultado = fibonacci(78);
        expect(resultado).toBe(8944394323791464);
    });

        it('debe dar error si n es negativo', () => {
        expect(() => fibonacci(-1))
            .toThrow('solo números enteros entre 0 y 78');
    });

    it('debe dar error si n es mayor que 78', () => {
        expect(() => fibonacci(79))
            .toThrow('solo números enteros entre 0 y 78');
    });

    it('debe dar error si n tiene decimales', () => {
        expect(() => fibonacci(2.5))
            .toThrow('solo números enteros entre 0 y 78');
    });

    it('debe dar error si n es un texto', () => {
        expect(() => fibonacci("5"))
            .toThrow('solo números enteros entre 0 y 78');
    });

});