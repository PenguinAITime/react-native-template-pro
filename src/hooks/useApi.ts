import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { StorageUtils, StorageKeys } from '@services/storage';

// Configure axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API URL
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = StorageUtils.getString(StorageKeys.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      StorageUtils.delete(StorageKeys.AUTH_TOKEN);
      // Navigate to login screen
    }
    return Promise.reject(error);
  }
);

// Generic API response type
interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Generic error type
interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Custom hook for GET requests
export function useApiQuery<TData = unknown>(
  queryKey: string[],
  url: string,
  options?: Omit<UseQueryOptions<ApiResponse<TData>, ApiError>, 'queryKey' | 'queryFn'>
) {
  return useQuery<ApiResponse<TData>, ApiError>({
    queryKey,
    queryFn: async () => {
      const response = await api.get<ApiResponse<TData>>(url);
      return response.data;
    },
    ...options,
  });
}

// Custom hook for POST/PUT/DELETE requests
export function useApiMutation<TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<ApiResponse<TData>>,
  options?: UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>
) {
  return useMutation<ApiResponse<TData>, ApiError, TVariables>({
    mutationFn,
    ...options,
  });
}

// Helper functions for common API calls
export const apiHelpers = {
  get: <T>(url: string) => api.get<ApiResponse<T>>(url).then((res) => res.data),
  post: <T>(url: string, data?: unknown) =>
    api.post<ApiResponse<T>>(url, data).then((res) => res.data),
  put: <T>(url: string, data?: unknown) =>
    api.put<ApiResponse<T>>(url, data).then((res) => res.data),
  delete: <T>(url: string) => api.delete<ApiResponse<T>>(url).then((res) => res.data),
  patch: <T>(url: string, data?: unknown) =>
    api.patch<ApiResponse<T>>(url, data).then((res) => res.data),
};

// Export configured axios instance for direct use
export { api };
