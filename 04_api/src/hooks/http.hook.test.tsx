import { renderHook } from '@testing-library/react-hooks';
import { useHttp } from './http.hook';

describe('useHttp', () => {
  it('should return loading and error state when making a request', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should throw an error when a request fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    try {
      await waitForNextUpdate();
    } catch (e) {
      expect(e).toEqual(
        new Error('Could not fetch https://jsonplaceholder.typicode.com/invalid-url, received 404')
      );
    }

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(
      'Could not fetch https://jsonplaceholder.typicode.com/invalid-url, received 404'
    );
  });
});
