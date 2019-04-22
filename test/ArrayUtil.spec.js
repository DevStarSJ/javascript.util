import { arrayMoveSelf, arrayMove, arrayRemoveSelf, arrayRemove } from '../src/ArrayUtil';

describe('ArrayUtil', () => {

  it('arrayMoveSelf', () => {
    const testArray = [ 1, 2, 3, 4 ];
    arrayMoveSelf(testArray, 3, 1);
    
    expect(testArray[1]).toEqual(4);
    expect(testArray[3]).toEqual(3);
  });

  it('arrayMove', () => {
    const testArray = [ 1, 2, 3, 4 ];
    const newArray = arrayMove(testArray, 3, 1);
    
    expect(newArray[1]).toEqual(4);
    expect(newArray[3]).toEqual(3);
    expect(testArray[1]).toEqual(2);
    expect(testArray[3]).toEqual(4);
  });

  it('arrayRemoveSelf', () => {
    const testArray = [ 1, 2, 3, 4 ];
    arrayRemoveSelf(testArray, 2);
    
    expect(testArray.length).toEqual(3);
    expect(testArray[2]).toEqual(4);
  });

  it('arrayRemove', () => {
    const testArray = [ 1, 2, 3, 4 ];
    const newArray = arrayRemove(testArray, 2);
    
    expect(newArray.length).toEqual(3);
    expect(newArray[2]).toEqual(4);
    expect(testArray.length).toEqual(4);
  });
});
