import SegmentedControl from '@react-native-segmented-control/segmented-control'
import { useTheme } from '@shopify/restyle'
import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { strings } from '@/locales'
import { Box, Theme } from '@/ui'
import { User } from './types'
import { UserCard } from './user-card'

type Props = {
  data: Array<User>
  onSelection: (users: User) => void
}

export const UsersList: React.FC<Props> = ({ data, onSelection }) => {
  const { spacing } = useTheme<Theme>()
  const [users, setUsers] = useState<Array<User>>(data)
  const [showFavorites, setShowFavorites] = useState<number>(0)

  const favoriteUsers = users.filter((user) => user.isFavorite)
  const commonUsers = users.filter((user) => !user.isFavorite)

  const onFavoriteUpdate = ({ userId, name }: User) => {
    const index = users.findIndex((user) => user.name === name && user.userId === userId)

    setUsers((currentUsers) => {
      const newUsers = [...currentUsers]
      newUsers[index].isFavorite = !newUsers[index].isFavorite
      return newUsers
    })
  }

  return (
    <Box flex={1}>
      <SegmentedControl
        values={[strings.usersList.common, strings.usersList.favorites]}
        selectedIndex={showFavorites}
        onChange={(event) => setShowFavorites(event.nativeEvent.selectedSegmentIndex)}
        style={{ margin: spacing.m }}
      />
      <FlatList
        contentContainerStyle={{ paddingBottom: spacing.m }}
        keyExtractor={(item) => item.userId + item.name}
        data={showFavorites ? favoriteUsers : commonUsers}
        renderItem={({ item }) => (
          <UserCard
            marginBottom="m"
            marginHorizontal="m"
            data={item}
            onSelection={onSelection}
            onFavoriteUpdate={onFavoriteUpdate}
          />
        )}
      />
    </Box>
  )
}
