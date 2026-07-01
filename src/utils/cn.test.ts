import { describe, expect, it } from 'vitest';

import { cn } from './cn';

describe('cn', () => {
  it('should return an empty string when no arguments are provided', () => {
    expect(cn()).toBe('');
  });

  it('should concatenate classes separated by space', () => {
    expect(cn('btn', 'primary')).toBe('btn primary');
  });

  it('should ignore empty strings and null values', () => {
    expect(cn('btn', '', 'active', null)).toBe('btn active');
  });

  it('should ignore falsy values (undefined, false, 0)', () => {
    expect(cn('btn', undefined, false, 'active')).toBe('btn active');
  });

  it('should work correctly with a single class', () => {
    expect(cn('button')).toBe('button');
  });
});
