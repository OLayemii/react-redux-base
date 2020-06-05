import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "../src/hooks/useDebounce";

test("should output result in specified seconds", done => {
  jest.setTimeout(5000);

  const { result } = renderHook(() => useDebounce(2000));
  const [debouncer] = result.current;

  function callback1(data) {
    expect.assertions(1);
    expect(data).toBe("Softcom");
    done();
  }

  debouncer(() => callback1("Softcom")); //Softcom will be sent to callback in 2s
});
