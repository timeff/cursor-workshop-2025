const { ex1 } = require("../function-generation");

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
