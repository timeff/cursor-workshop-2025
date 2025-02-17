const {
  ex1,
  ex2,
  calculateAverage,
  countCharacters,
} = require("../prompt-bar");

describe("ex1", () => {
  test("should sort people by age and then by name", () => {
    const people = [
      { name: "John Smith", age: 30 },
      { name: "Sarah Johnson", age: 27 },
      { name: "Emma Wilson", age: 19 },
      { name: "James Brown", age: 27 },
      { name: "Robert Taylor", age: 30 },
    ];

    const expected = [
      { name: "Emma Wilson", age: 19 },
      { name: "James Brown", age: 27 },
      { name: "Sarah Johnson", age: 27 },
      { name: "John Smith", age: 30 },
      { name: "Robert Taylor", age: 30 },
    ];

    const result = ex1(people);
    expect(result).toEqual(expected);
  });

  test("should handle empty array", () => {
    const people = [];
    const result = ex1(people);
    expect(result).toEqual([]);
  });

  test("should handle single person array", () => {
    const people = [{ name: "John Smith", age: 30 }];
    const result = ex1(people);
    expect(result).toEqual([{ name: "John Smith", age: 30 }]);
  });
});

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

describe("calculateAverage", () => {
  test("calculates average of positive numbers", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  test("calculates average of negative numbers", () => {
    expect(calculateAverage([-1, -2, -3])).toBe(-2);
  });

  test("calculates average of mixed numbers", () => {
    expect(calculateAverage([-1, 0, 1])).toBe(0);
  });

  test("returns 0 for empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  test("handles single number array", () => {
    expect(calculateAverage([5])).toBe(5);
  });
});

describe("countCharacters", () => {
  test("counts characters in simple string", () => {
    expect(countCharacters("hello")).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });

  test("handles empty string", () => {
    expect(countCharacters("")).toEqual({});
  });

  test("handles string with spaces", () => {
    expect(countCharacters("hi there")).toEqual({
      h: 2,
      i: 1,
      " ": 1,
      t: 1,
      e: 2,
      r: 1,
    });
  });

  test("is case sensitive", () => {
    expect(countCharacters("Hello")).toEqual({
      H: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });

  test("handles special characters", () => {
    expect(countCharacters("hi!!!")).toEqual({
      h: 1,
      i: 1,
      "!": 3,
    });
  });
});
