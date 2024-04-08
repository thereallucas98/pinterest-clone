import { FlatList, StyleSheet } from 'react-native'

import { Filter } from './filter'

type FilterProps = {
  filters: string[]
  selectedFilter: string
  onChange: (value: string) => void
}

export function Filters({ filters, selectedFilter, onChange }: FilterProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          isSelected={item === selectedFilter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}

export const styles = StyleSheet.create({
  list: {
    paddingBottom: 6,
  },
  content: {
    gap: 24,
    paddingHorizontal: 8,
  },
})
