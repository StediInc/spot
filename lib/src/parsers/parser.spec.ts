import { parse } from "./parser";

describe("parser", () => {
  test("parses all information", () => {
    const result = parse("./lib/src/test/examples/contract.ts");
    expect(result.api).not.toBeUndefined;
    expect(result.endpoints).toHaveLength(2);
    expect(result.types).toHaveLength(7);
  });

  test("follows recursive imports", () => {
    const result = parse(
      "./lib/src/test/examples/recursive-imports-and-exports/contract.ts"
    );
    expect(result.api).not.toBeUndefined;
    // TODO: Support exports as well.
    expect(result.endpoints).toHaveLength(2);
  });
});
