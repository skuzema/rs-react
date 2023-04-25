import { renderHook, act } from '@testing-library/react';
import { useHttp } from './http.hook';
import { vi } from 'vitest';

describe('useHttp', () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true,
        status: 200,
      });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with loading=false and error=null', () => {
    const { result } = renderHook(() => useHttp());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should return the data when the request is successful', async () => {
    const responseData = { foo: 'bar' };

    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(responseData),
        ok: true,
        status: 200,
      });
    });

    const { result } = renderHook(() => useHttp());

    const data = await act(async () => {
      return await result.current.request('http://example.com');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(data).toBe(responseData);
  });
});
