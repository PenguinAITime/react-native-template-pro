import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <SafeAreaView className="flex-1 bg-red-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center p-6">
          <View className="bg-red-100 rounded-full p-4 mb-4">
            <Feather name="alert-triangle" size={48} color="#DC2626" />
          </View>

          <Text className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</Text>

          <Text className="text-gray-600 text-center mb-6">
            We&apos;re sorry for the inconvenience. Please try again.
          </Text>

          {__DEV__ && (
            <View className="bg-gray-100 p-4 rounded-lg mb-6 w-full">
              <Text className="text-sm font-mono text-gray-800 mb-2">
                {error.name}: {error.message}
              </Text>
              <Text className="text-xs font-mono text-gray-600">{error.stack}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={resetErrorBoundary}
            className="bg-primary px-6 py-3 rounded-lg flex-row items-center"
          >
            <Feather name="refresh-cw" size={20} color="#FFFFFF" />
            <Text className="text-white font-semibold ml-2">Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: { componentStack?: string | null }) => void;
  onReset?: () => void;
}

export function ErrorBoundary({
  children,
  fallback = ErrorFallback,
  onError,
  onReset,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback}
      onError={(error, errorInfo) => {
        // Log to error tracking service
        if (__DEV__) {
          console.error('Error Boundary caught:', error);
          console.error('Component stack:', errorInfo.componentStack);
          console.tron?.error?.('Error Boundary', error);
        }

        // Call custom error handler if provided
        onError?.(error, errorInfo);
      }}
      onReset={() => {
        // Custom reset logic
        onReset?.();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

// Hook to programmatically trigger error boundary
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  if (error) {
    throw error;
  }

  return setError;
};

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}
