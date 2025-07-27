import { QueryClient } from '@tanstack/react-query';
import { StorageUtils } from '@services/storage';

// Create a query client with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time: 5 minutes
      staleTime: 5 * 60 * 1000,
      // Cache time: 10 minutes
      gcTime: 10 * 60 * 1000,
      // Retry failed requests 3 times
      retry: 3,
      // Retry delay doubles each time (exponential backoff)
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Refetch on window focus
      refetchOnWindowFocus: false,
      // Don't refetch on reconnect by default
      refetchOnReconnect: 'always',
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
      // Show error for 5 seconds
      gcTime: 5000,
    },
  },
});

// Persist query cache to MMKV
export const persistQueryClient = {
  persistClient: async () => {
    const state = queryClient.getQueryCache().getAll();
    StorageUtils.setJSON('query-cache', state);
  },
  restoreClient: async () => {
    const cache = StorageUtils.getJSON('query-cache');
    if (cache) {
      // Restore cache state
      // Note: This is a simplified version, you might need more sophisticated restoration
    }
  },
};

// Invalidate queries helper
export const invalidateQueries = (queryKey: string[]) => {
  return queryClient.invalidateQueries({ queryKey });
};

// Prefetch query helper
export const prefetchQuery = (queryKey: string[], queryFn: () => Promise<any>) => {
  return queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
};
