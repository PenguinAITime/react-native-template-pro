import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  Details: { id: string };
};

// Composed types for screens
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export type SettingsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Settings'>,
  StackScreenProps<RootStackParamList>
>;

// Stack screen props
export type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

// Global navigation type for useNavigation
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}