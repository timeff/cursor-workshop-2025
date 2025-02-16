const { calculateAverage, countCharacters } = require("../basic-tool/inline");

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
