import { BoxProps } from '@shopify/restyle'
import React from 'react'

import { dateStringFromISODate } from '@/services'
import { Box, Text, Theme } from '@/ui'

type Props = BoxProps<Theme> & {
  rawDate: string
}

export const OverviewSectionHeader: React.FC<Props> = ({ rawDate, ...props }) => {
  const formattedDate = dateStringFromISODate(rawDate)

  return (
    <Box bg="background" {...props}>
      <Text variant="subheader">{formattedDate}</Text>
    </Box>
  )
}
