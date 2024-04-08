import { FontAwesome } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text } from 'react-native'

import { theme } from '~/styles/theme'

type ButtonMenuProps = {
  title: string
  icon: keyof typeof FontAwesome.glyphMap
}

export function ButtonMenu({ icon, title }: ButtonMenuProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    marginTop: 10,
  },
  icon: {
    padding: 24,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 22,
  },
})
