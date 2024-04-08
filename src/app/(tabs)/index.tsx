import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Filters } from '~/components/filter'
import { theme } from '~/styles/theme'
import { FILTERS } from '~/utils/filter'

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])

  const handleChanceSelectedFilter = useCallback((item: string) => {
    setFilter(item)
  }, [])

  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS}
        selectedFilter={filter}
        onChange={handleChanceSelectedFilter}
      />
      {/* <Posts posts={POSTS} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
})
