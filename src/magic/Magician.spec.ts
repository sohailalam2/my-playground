import { describe, expect, it } from 'vitest';

import { Magician } from '@/magic/Magician';

describe('Magician', () => {
  it('can show magic', () => {
    const magic = new Magician('Dr. Strange').showMagic();

    expect(magic).toBeDefined();
    expect(typeof magic).toEqual('string');
  });
});
