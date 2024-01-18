const filter = require('./Filter');

describe('filter function', () => {
  test('should filter elements based on the provided callback', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (value) => value > 2;

    expect(filter(arr, callback)).toEqual([3, 4, 5]);
  });

  test('should work correctly with an empty array', () => {
    const arr = [];
    const callback = (value) => value > 0;

    expect(filter(arr, callback)).toEqual([]);
  });

  test('should handle the index parameter correctly', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const callback = (value, index) => index % 2 === 0;

    expect(filter(arr, callback)).toEqual(['a', 'c']);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (value) => value > 2;

    filter(arr, callback);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work correctly with a custom starting index', () => {
    const arr = [3, 2, 3, 4, 1, 5];
    const callback = (value) => value > 2;

    expect(filter(arr, callback, 2)).toEqual([3, 4, 5]);
  });
});