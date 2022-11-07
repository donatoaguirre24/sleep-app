import { SleepIntervalOverview } from '@/features/family-overview/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum Screens {
  UsersList = 'Users',
  FamilyOverview = 'Sharing',
  SleepDetails = 'Sleep Details',
}

export type RootStackParamList = {
  [Screens.UsersList]: undefined
  [Screens.FamilyOverview]: undefined
  [Screens.SleepDetails]: SleepIntervalOverview
}

export type UsersListStackProps = NativeStackScreenProps<RootStackParamList, Screens.UsersList>

export type FamilyViewStackProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.FamilyOverview
>

export type SleepDetailsStackProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.SleepDetails
>
