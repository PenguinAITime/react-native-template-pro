import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface AppButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: () => React.ReactNode;
}

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  onPress,
  variant = 'primary',
  className = '',
  loading = false,
  disabled = false,
  icon,
}) => {
  const baseStyles = 'py-3 px-6 rounded-lg flex-row justify-center items-center';
  const variantStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    outline: 'border-2 border-primary bg-transparent',
  };

  const textStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-primary',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? 'opacity-50' : ''
      }`}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <View className="flex-row items-center">
          {icon && <View className="mr-2">{icon()}</View>}
          <Text className={`font-bold text-base ${textStyles[variant]}`}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};