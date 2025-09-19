const { ex3 } = require("../ex3");

describe("countVowels", () => {
  test("counts vowels in simple string", () => {
    expect(ex3("hello")).toBe(2);
  });

  test("handles string with no vowels", () => {
    expect(ex3("rhythm")).toBe(0);
  });

  test("handles empty string", () => {
    expect(ex3("")).toBe(0);
  });
});
