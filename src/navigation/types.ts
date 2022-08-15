import type { RouteProp } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum Screens {
  FamilyView = 'Sharing',
  SleepDetails = 'Sleep Details',
}

export type RootStackParamList = {
  [Screens.FamilyView]: undefined
  [Screens.SleepDetails]: { intervalId: string }
}

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.FamilyView,
  Screens.SleepDetails
>

export type FamilyViewRouteProp = RouteProp<RootStackParamList, Screens.FamilyView>

export type SleepDetailsRouteProp = RouteProp<RootStackParamList, Screens.SleepDetails>
