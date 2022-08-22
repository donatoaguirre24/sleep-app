import { Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')

/**
 * Ensures absolute values scale properly
 */
export function normalize(value: number) {
  const ratio = 390 // Based on iPhone 12 resolution
  const scale = width / ratio

  return PixelRatio.roundToNearestPixel(value * scale)
}
