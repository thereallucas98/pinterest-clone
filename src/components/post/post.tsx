import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { theme } from '~/styles/theme'
import { colors } from '~/styles/theme/colors'

export interface PostModel {
  id: string
  title: string
  image: string
}

type PostProps = {
  post: PostModel
}

export function Post({ post }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  })

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
        alt={post.title}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    borderRadius: 22,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
})
