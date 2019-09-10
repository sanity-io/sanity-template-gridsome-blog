<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <post-card
        v-for="edge in $page.tag.belongsTo.edges" 
        :key="edge.node.id" 
        :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            coverImage (width: 860, blur: 10)
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">

</style>

