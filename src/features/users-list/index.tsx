import React, { useCallback } from 'react'

import { users } from '@/data'
import { Screens, UsersListStackProps } from '@/navigation'
import { UsersList } from './users-list'

export const UsersListScreen: React.FC<UsersListStackProps> = ({ navigation }) => {
  const { navigate } = navigation

  const showSleepData = useCallback(() => {
    navigate(Screens.FamilyOverview)
  }, [navigate])

  return <UsersList data={users} onSelection={showSleepData} />
}
