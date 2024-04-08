import { useCallback } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Post, PostModel } from './post'

type PostsProps = {
  posts: PostModel[]
}

export function Posts({ posts }: PostsProps) {
  const postsByColumn = useCallback(
    (column: 'right' | 'left') => {
      const rest = column === 'left' ? 0 : 1

      return posts
        .filter((_, index) => index % 2 === rest)
        .map((post) => <Post key={post.id} post={post} />)
    },
    [posts],
  )

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn('left')}</View>
        <View style={styles.column}>{postsByColumn('right')}</View>
      </View>
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  list: {
    paddingTop: 16,
  },
})
