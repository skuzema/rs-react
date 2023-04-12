import { useHttp } from '../hooks/http.hook';

const useNewsAppService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://newsapi.org';
  const _apiKey = 'apiKey=a9f2096767724b18be861d8a9c586c08';
  //const _apiKey = 'apiKey=a74324346ad64f5b9a1168a6597eed20';
  //const _apiKey = 'apiKey=4e94685c26ff4ce4add06cb64c9a4642';
  //const _apiKey = 'apiKey=e93a0be9eb444b959b03cc0f5638ed93';
  const _basePageSize = '100';
  const _basePage = '1';
  const _baseQuery = '';
  const _baseSources = '';
  const _baseSortBy = 'publishedAt';

  const getEverything = async (
    query = _baseQuery,
    sources = _baseSources,
    sort = _baseSortBy,
    page = _basePage,
    page_size = _basePageSize
  ) => {
    const res = await request(
      `${_apiBase}/v2/everything?q=${query}&sortBy=${sort}&sources=${sources}&page=${page}&pageSize=${page_size}&searchIn=title&${_apiKey}`
    );
    return res.articles;
  };

  return {
    loading,
    error,
    clearError,
    getEverything,
  };
};

export default useNewsAppService;
