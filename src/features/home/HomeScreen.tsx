import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Title, Paragraph } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { AppButton } from '@components/common';
import type { HomeScreenProps } from '@navigation/types';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-softGray">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-4 pt-6 pb-4">
          <Text className="text-3xl font-medium text-charcoal">Welcome to Your App</Text>
          <Text className="text-base text-gray-600 mt-2">
            This is a React Native template with TypeScript, NativeWind, and Redux
          </Text>
        </View>

        {/* Feature Cards */}
        <View className="px-4">
          <Card className="mb-4">
            <Card.Content>
              <Title>TypeScript + React Native</Title>
              <Paragraph>
                Fully typed with strict mode enabled for better developer experience
              </Paragraph>
            </Card.Content>
          </Card>

          <Card className="mb-4">
            <Card.Content>
              <Title>NativeWind (Tailwind CSS)</Title>
              <Paragraph>
                Use Tailwind CSS classes directly in your React Native components
              </Paragraph>
            </Card.Content>
          </Card>

          <Card className="mb-4">
            <Card.Content>
              <Title>Redux Toolkit + RTK Query</Title>
              <Paragraph>Modern Redux setup with built-in data fetching and caching</Paragraph>
            </Card.Content>
          </Card>

          <Card className="mb-4">
            <Card.Content>
              <Title>React Navigation</Title>
              <Paragraph>Tab and stack navigation pre-configured and ready to use</Paragraph>
            </Card.Content>
          </Card>

          <Card className="mb-4">
            <Card.Content>
              <Title>ESLint + Prettier</Title>
              <Paragraph>Code quality tools with pre-commit hooks already configured</Paragraph>
            </Card.Content>
          </Card>
        </View>

        {/* Example Action */}
        <View className="px-4 mt-6 mb-8">
          <AppButton
            onPress={() => navigation.navigate('Settings')}
            icon={() => <Feather name="settings" size={20} color="#FFFFFF" />}
          >
            Go to Settings
          </AppButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
