import { Image, ImageProps, StyleSheet } from 'react-native'

import { theme } from '~/styles/theme'

type AvatarProps = {
  selected: boolean
}

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return (
    <Image
      style={[styles.image, selected && styles.selected]}
      alt="David Lucas"
      {...rest}
    />
  )
}

export const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
})
