import { sum } from "./runApp";

describe("stub jest", () => {
  it("calculates sum of numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
