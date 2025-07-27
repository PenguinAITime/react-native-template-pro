import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput, HelperText } from 'react-native-paper';
import { AppButton } from '@components/common';
import { useApiMutation, apiHelpers } from '@hooks/useApi';
import { useUserStore } from '@store/userStore';
import { StorageUtils, StorageKeys } from '@services/storage';

// Define validation schema
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

export const LoginForm: React.FC = () => {
  const setUser = useUserStore((state) => state.setUser);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useApiMutation<LoginResponse, LoginFormData>(
    async (data) => apiHelpers.post('/auth/login', data),
    {
      onSuccess: (response) => {
        // Store auth token
        StorageUtils.setString(StorageKeys.AUTH_TOKEN, response.data.token);

        // Update user store
        setUser(response.data.user);

        // Navigate to home or show success
      },
      onError: (error) => {
        // Handle login error
        console.error('Login failed:', error.message);
      },
    }
  );

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold text-center mb-8">Login</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View className="mb-4">
            <TextInput
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              error={!!errors.email}
            />
            {errors.email && (
              <HelperText type="error" visible={!!errors.email}>
                {errors.email.message}
              </HelperText>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <View className="mb-6">
            <TextInput
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              mode="outlined"
              secureTextEntry
              error={!!errors.password}
            />
            {errors.password && (
              <HelperText type="error" visible={!!errors.password}>
                {errors.password.message}
              </HelperText>
            )}
          </View>
        )}
      />

      <AppButton
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting || loginMutation.isPending}
        disabled={isSubmitting || loginMutation.isPending}
      >
        Login
      </AppButton>

      {loginMutation.isError && (
        <Text className="text-red-500 text-center mt-4">
          {loginMutation.error?.message || 'Login failed. Please try again.'}
        </Text>
      )}
    </View>
  );
};
