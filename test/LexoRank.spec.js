import LexoRank from '../src/LexoRank';

describe('ArrayUtil', () => {

  it('arrayMoveSelf', () => {
    const v100 = LexoRank('', '');
    const v50 = LexoRank('', v100);
    const v150 = LexoRank(v100, '');
    
    expect(v50 < v100 && v100 < v150).toEqual(true);

    const v75 = LexoRank(v50, v100);
    const v125 = LexoRank(v100, v150);

    expect(v50 < v75 && v75 < v100).toEqual(true);
    expect(v100 < v125 && v125 < v150).toEqual(true);

    let v = LexoRank();
    for (let i = 0; i < 100; i++) {
      const a = LexoRank('', v);
      expect(a < v).toEqual(true);
      v = a;
    }

    v = LexoRank();
    for (let i = 0; i < 100; i++) {
      const a = LexoRank(v);
      expect(v < a).toEqual(true);
      v = a;
    }
  });
});
