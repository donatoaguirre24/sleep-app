import { BoxProps } from '@shopify/restyle'
import React from 'react'

import { dateStringFromISODate } from '@/services'
import { Box, Text, Theme } from '@/ui'

type Props = BoxProps<Theme> & {
  date: string
}

export const OverviewSectionHeader: React.FC<Props> = ({ date, ...props }) => {
  const formattedDate = dateStringFromISODate(date)

  return (
    <Box bg="background" {...props}>
      <Text variant="subheader">{formattedDate}</Text>
    </Box>
  )
}
