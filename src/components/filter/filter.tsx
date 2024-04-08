import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'

import { theme } from '~/styles/theme'

type FilterProps = {
  filter: string
  isSelected: boolean
}

export function Filter({
  filter,
  isSelected,
  ...rest
}: FilterProps & PressableProps) {
  return (
    <Pressable
      style={[styles.pressable, isSelected && styles.selectedFilter]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 6,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  selectedFilter: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
})
