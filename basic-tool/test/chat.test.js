const { findMax, countVowels } = require("../chat.js");

// Example 1: Find Maximum Tests
describe("findMax", () => {
  test("finds maximum in array", () => {
    expect(findMax([1, 5, 2, 8, 3])).toBe(8);
  });

  test("handles negative numbers", () => {
    expect(findMax([-1, -5, -2])).toBe(-1);
  });

  test("handles single number", () => {
    expect(findMax([1])).toBe(1);
  });
});

// Example 2: Count Vowels Tests
describe("countVowels", () => {
  test("counts vowels in simple string", () => {
    expect(countVowels("hello")).toBe(2);
  });

  test("handles string with no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  test("handles empty string", () => {
    expect(countVowels("")).toBe(0);
  });
});
