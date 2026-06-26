import { describe, expect, it } from 'vitest';

import { cn } from './cn';

describe('cn', () => {
  it('devuelve una cadena vacía cuando no recibe argumentos', () => {
    expect(cn()).toBe('');
  });

  it('concatena las clases recibidas separadas por espacio', () => {
    expect(cn('btn', 'primary')).toBe('btn primary');
  });

  it('ignora las cadenas vacías o nulas', () => {
    expect(cn('btn', '', 'active', null as unknown as string)).toBe('btn active');
  });

  it('ignora los valores falsy (undefined, false, 0)', () => {
    expect(cn('btn', undefined as unknown as string, false as unknown as string, 'active')).toBe('btn active');
  });

  it('funciona correctamente con una sola clase', () => {
    expect(cn('button')).toBe('button');
  });
});
