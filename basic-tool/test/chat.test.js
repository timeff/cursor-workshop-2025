const { countVowels } = require("../chat.js");

// Example 1: Count Vowels Tests
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
