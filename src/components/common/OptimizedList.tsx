import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native-paper';

interface OptimizedListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  estimatedItemSize?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  isLoading?: boolean;
  isLoadingMore?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
  emptyMessage?: string;
  header?: React.ReactElement;
  footer?: React.ReactElement;
  contentContainerStyle?: any;
}

export function OptimizedList<T>({
  data,
  renderItem,
  keyExtractor,
  estimatedItemSize = 100,
  onEndReached,
  onEndReachedThreshold = 0.5,
  isLoading = false,
  isLoadingMore = false,
  onRefresh,
  refreshing = false,
  emptyMessage = 'No items found',
  header,
  footer,
  contentContainerStyle,
}: OptimizedListProps<T>) {
  if (isLoading && !data.length) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const ListFooterComponent = () => {
    if (isLoadingMore) {
      return (
        <View className="py-4">
          <ActivityIndicator size="small" />
        </View>
      );
    }
    return footer || null;
  };

  const ListEmptyComponent = () => (
    <View className="flex-1 justify-center items-center p-8">
      <Text className="text-gray-500 text-center">{emptyMessage}</Text>
    </View>
  );

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={estimatedItemSize}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={header}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      // Performance optimizations
      drawDistance={200}
      removeClippedSubviews={true}
      // Ensures consistent performance
      overrideItemLayout={(layout) => {
        layout.size = estimatedItemSize;
      }}
    />
  );
}

// Example usage component
interface User {
  id: string;
  name: string;
  email: string;
}

export const UserList: React.FC = () => {
  const [users] = React.useState<User[]>([]);
  const [isLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const renderUser: ListRenderItem<User> = ({ item }) => (
    <TouchableOpacity className="p-4 bg-white mb-2 rounded-lg shadow-sm">
      <Text className="text-lg font-semibold">{item.name}</Text>
      <Text className="text-gray-600">{item.email}</Text>
    </TouchableOpacity>
  );

  const handleRefresh = async () => {
    setRefreshing(true);
    // Fetch fresh data
    setRefreshing(false);
  };

  return (
    <OptimizedList
      data={users}
      renderItem={renderUser}
      keyExtractor={(item) => item.id}
      estimatedItemSize={80}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      isLoading={isLoading}
      emptyMessage="No users found"
    />
  );
};
