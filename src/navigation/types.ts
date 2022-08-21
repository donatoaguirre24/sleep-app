import { SleepIntervalOverview } from '@/features/family-overview/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum Screens {
  FamilyOverview = 'Sharing',
  SleepDetails = 'Sleep Details',
}

export type RootStackParamList = {
  [Screens.FamilyOverview]: undefined
  [Screens.SleepDetails]: SleepIntervalOverview
}

export type FamilyViewStackProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.FamilyOverview
>

export type SleepDetailsStackProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.SleepDetails
>
