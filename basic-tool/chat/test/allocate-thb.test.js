const { allocateAndFormatThaiBaht } = require("../allocate-thb");

describe("allocateAndFormatThaiBaht", () => {
  test("splits amount evenly among 3 people", () => {
    expect(allocateAndFormatThaiBaht(1000, 3)).toEqual([
      "333.34THB",
      "333.33THB",
      "333.33THB",
    ]);
  });

  test("handles even split", () => {
    expect(allocateAndFormatThaiBaht(900, 3)).toEqual([
      "300.00THB",
      "300.00THB",
      "300.00THB",
    ]);
  });

  test("handles single payer", () => {
    expect(allocateAndFormatThaiBaht(500, 1)).toEqual(["500.00THB"]);
  });

  test("handles zero amount", () => {
    expect(allocateAndFormatThaiBaht(0, 2)).toEqual(["0.00THB", "0.00THB"]);
  });

  test("handles amount with decimals", () => {
    expect(allocateAndFormatThaiBaht(100.5, 2)).toEqual([
      "50.25THB",
      "50.25THB",
    ]);
  });
});
