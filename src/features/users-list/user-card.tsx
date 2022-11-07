import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'

import { Box, Card, CardProps, Text } from '@/ui'
import { User } from './types'

type Props = CardProps & {
  data: User
  onSelection: (data: User) => void
  onFavoriteUpdate: (data: User) => void
}

export const UserCard: React.FC<Props> = ({ data, onSelection, onFavoriteUpdate, ...props }) => {
  const handlePress = () => {
    onSelection(data)
  }

  const handleFavoriteUpdate = () => {
    onFavoriteUpdate(data)
  }

  return (
    <Pressable onPress={handlePress}>
      <Card
        backgroundColor="card"
        flexDirection="row"
        alignItems="center"
        variant="elevated"
        paddingHorizontal="m"
        paddingVertical="m"
        {...props}
      >
        <Box flex={1} flexDirection="row">
          <TouchableOpacity onPress={handleFavoriteUpdate}>
            <Text marginRight="l" variant="subheader" opacity={data.isFavorite ? 1 : 0.5}>
              ⭐️
            </Text>
          </TouchableOpacity>
          <Text variant="subheader">{data.name}</Text>
        </Box>
      </Card>
    </Pressable>
  )
}
