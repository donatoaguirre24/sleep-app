import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'

import { Box } from './box'
import { Theme } from './theme'

export type CardProps = VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>

export const Card = createRestyleComponent<CardProps, Theme>(
  [createVariant({ themeKey: 'cardVariants' })],
  Box
)
