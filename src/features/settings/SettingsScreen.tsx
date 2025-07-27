import React from 'react';
import { View, ScrollView, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List, Divider } from 'react-native-paper';
import type { SettingsScreenProps } from '@navigation/types';

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isPushEnabled, setIsPushEnabled] = React.useState(true);

  return (
    <SafeAreaView className="flex-1 bg-softGray">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-4 pt-6 pb-4">
          <Text className="text-3xl font-medium text-charcoal">Settings</Text>
        </View>

        {/* Settings List */}
        <View className="bg-white">
          <List.Section>
            <List.Subheader>Preferences</List.Subheader>

            <List.Item
              title="Dark Mode"
              description="Toggle dark theme"
              left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
              right={() => (
                <Switch
                  value={isDarkMode}
                  onValueChange={setIsDarkMode}
                  trackColor={{ false: '#E2E8F0', true: '#4FD1C5' }}
                  thumbColor={isDarkMode ? '#FFD700' : '#f4f3f4'}
                />
              )}
            />

            <Divider />

            <List.Item
              title="Push Notifications"
              description="Receive app notifications"
              left={(props) => <List.Icon {...props} icon="bell" />}
              right={() => (
                <Switch
                  value={isPushEnabled}
                  onValueChange={setIsPushEnabled}
                  trackColor={{ false: '#E2E8F0', true: '#4FD1C5' }}
                  thumbColor={isPushEnabled ? '#FFD700' : '#f4f3f4'}
                />
              )}
            />
          </List.Section>

          <Divider />

          <List.Section>
            <List.Subheader>About</List.Subheader>

            <List.Item
              title="Version"
              description="1.0.0"
              left={(props) => <List.Icon {...props} icon="information" />}
            />

            <Divider />

            <List.Item
              title="Privacy Policy"
              description="View our privacy policy"
              left={(props) => <List.Icon {...props} icon="shield-check" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {
                // TODO: Navigate to privacy policy
              }}
            />

            <Divider />

            <List.Item
              title="Terms of Service"
              description="View terms and conditions"
              left={(props) => <List.Icon {...props} icon="file-document" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {
                // TODO: Navigate to terms of service
              }}
            />
          </List.Section>

          <Divider />

          <List.Section>
            <List.Subheader>Developer</List.Subheader>

            <List.Item
              title="Debug Mode"
              description="Show developer tools"
              left={(props) => <List.Icon {...props} icon="bug" />}
              onPress={() => {
                // TODO: Toggle debug mode
              }}
            />

            <Divider />

            <List.Item
              title="Clear Cache"
              description="Clear app cache and data"
              left={(props) => <List.Icon {...props} icon="delete" />}
              onPress={() => {
                // TODO: Implement cache clearing
              }}
            />
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
