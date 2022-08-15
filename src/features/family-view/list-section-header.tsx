import { BoxProps } from '@shopify/restyle'
import React from 'react'

import { Box, Text } from '@/components'
import { Theme } from '@/theme'

type Props = BoxProps<Theme> & {
  rawDate: string
}

export const SectionHeader: React.FC<Props> = ({ rawDate, ...props }) => {
  const date = new Date(rawDate)
  const formattedDate = date.toLocaleDateString('en-US')

  return (
    <Box bg="background" {...props}>
      <Text variant="subheader">{formattedDate}</Text>
    </Box>
  )
}
