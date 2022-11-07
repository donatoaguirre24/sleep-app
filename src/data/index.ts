import { DailyFamilyOverview } from '@/features/family-overview/types'
import { SubjectSleepData } from '@/features/sleep-details/types'
import { User } from '@/features/users-list/types'

type SubjectsSleepData = {
  [key: string]: SubjectSleepData
}

export const overviewData: Array<DailyFamilyOverview> = require('./overview.json')

export const users: Array<User> = require('./users.json')

export const subjectData: SubjectsSleepData = {
  '2228b530e055401f81ba37b51ff6f81d': require('./subject-1.json'),
  'd6c1355e38194139b8d0c870baf86365': require('./subject-2.json'),
  'f9bf229fd19e4c799e8c19a962d73449': require('./subject-3.json'),
}
