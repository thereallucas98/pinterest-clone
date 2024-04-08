import { FontAwesome } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { theme } from '~/styles/theme'

import { ButtonMenu } from './button-menu'

type MenuProps = {
  onClose: () => void
}

const MenuComponent = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <ButtonMenu title="Pin" icon="home" />
          <ButtonMenu title="Colagem" icon="paste" />
          <ButtonMenu title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})

MenuComponent.displayName = 'Search'

export default MenuComponent

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.white,
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
  },
})
