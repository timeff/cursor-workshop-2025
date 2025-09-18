const { ex2 } = require("../function-generation");

describe("ex2", () => {
  test("creates frequency table for numbers", () => {
    expect(ex2([1, 2, 2, 3, 3, 3, 4])).toEqual({
      1: 1,
      2: 2,
      3: 3,
      4: 1,
    });
  });

  test("creates frequency table for strings", () => {
    expect(ex2(["apple", "banana", "apple", "cherry", "banana"])).toEqual({
      apple: 2,
      banana: 2,
      cherry: 1,
    });
  });

  test("handles empty array", () => {
    expect(ex2([])).toEqual({});
  });

  test("handles array with single item", () => {
    expect(ex2(["apple"])).toEqual({
      apple: 1,
    });
  });

  test("handles array with all same items", () => {
    expect(ex2([5, 5, 5, 5])).toEqual({
      5: 4,
    });
  });
});
