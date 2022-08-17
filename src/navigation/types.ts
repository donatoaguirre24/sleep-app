import type { RouteProp } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum Screens {
  FamilyOverview = 'Sharing',
  SleepDetails = 'Sleep Details',
}

export type RootStackParamList = {
  [Screens.FamilyOverview]: undefined
  [Screens.SleepDetails]: { intervalId: string }
}

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.FamilyOverview,
  Screens.SleepDetails
>

export type FamilyViewRouteProp = RouteProp<RootStackParamList, Screens.FamilyOverview>

export type SleepDetailsRouteProp = RouteProp<RootStackParamList, Screens.SleepDetails>
