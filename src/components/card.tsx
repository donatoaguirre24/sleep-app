import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'

import { Theme } from '@/theme'
import { Box } from './box'

type CardProps = VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>

export const Card = createRestyleComponent<CardProps, Theme>(
  [createVariant({ themeKey: 'cardVariants' })],
  Box
)
