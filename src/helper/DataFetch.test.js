import { renderHook } from "@testing-library/react-hooks";
import DataFetch from "./DataFetch";

jest.mock("./DataFetch");

describe("Fetch hook function", () => {
  it("Returns mock data", () => {
    DataFetch.mockReturnValue({
      data: "hello",
      status: false,
      isError: false,
    });
    const { result } = renderHook(() => DataFetch("https://www.google.com"));

    expect(result.current).toEqual({
      data: "hello",
      status: false,
      isError: false,
    });
  });
});

// test status
// test if error
