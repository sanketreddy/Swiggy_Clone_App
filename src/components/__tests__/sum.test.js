import { sum } from "../sum";

test("Sum function should calculate the sum of two nos", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
