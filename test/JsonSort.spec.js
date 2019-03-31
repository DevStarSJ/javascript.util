import { SortOrderEnum, makeAscMethodAtJsonList, makeDescMethodAtJsonList, sortJsonArray } from '../src/JsonSort';

describe('JsonSort', () => {
  const testList = [ 
    {id: 1, name: 'C', addr: 'B'},
    {id: 2, name: 'B', addr: 'A'},
    {id: 3, name: 'A', addr: 'C'},
  ];

  it('SortOrderEnum', () => {
    expect(SortOrderEnum.none).toEqual(0);
    expect(SortOrderEnum.asc).toEqual(1);
    expect(SortOrderEnum.desc).toEqual(2);
    expect(SortOrderEnum.fromString('ASC')).toEqual(1);
    expect(SortOrderEnum.fromString('asc')).toEqual(1);
    expect(SortOrderEnum.fromString('DESC')).toEqual(2);
    expect(SortOrderEnum.fromString('desc')).toEqual(2);
    expect(SortOrderEnum.fromString('NONE')).toEqual(0);
    expect(SortOrderEnum.fromString('none')).toEqual(0);
    expect(SortOrderEnum.fromString()).toEqual(0);
  });

  it('makeAscMethodAtJsonList', () => {
    const ascName = makeAscMethodAtJsonList('name');
    expect(testList.slice().sort(ascName).map(row => row.id)).toEqual([3, 2, 1]);
    expect(testList.slice().sort(ascName).map(row => row.addr)).toEqual(['C', 'A', 'B']);

    const ascId = makeAscMethodAtJsonList('id');
    expect(testList.slice().sort(ascId).map(row => row.name)).toEqual(['C', 'B', 'A']);
  });

  it('makeAscMethodAtJsonList', () => {
    const descName = makeDescMethodAtJsonList('name');
    expect(testList.slice().sort(descName).map(row => row.id)).toEqual([1, 2, 3]);
    expect(testList.slice().sort(descName).map(row => row.addr)).toEqual(['B', 'A', 'C']);

    const descId = makeDescMethodAtJsonList('id');
    expect(testList.slice().sort(descId).map(row => row.name)).toEqual(['A', 'B', 'C']);
  });

  it('sortJsonArray', () => {
    expect(sortJsonArray(testList, 'id', SortOrderEnum.desc).map(row => row.id))
      .toEqual([3, 2, 1]);
    expect(sortJsonArray(testList, 'name', SortOrderEnum.asc).map(row => row.addr))
      .toEqual(['C', 'A', 'B']);
    expect(sortJsonArray(testList, 'addr', SortOrderEnum.none).map(row => row.id))
      .toEqual([1, 2, 3]);
  });

});
