<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metaData.sanityOptions.projectId"
    :dataset="$static.metaData.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({node}) => (<figure>
          <img src={this.$urlForImage(node, this.$static.metaData.sanityOptions).auto('format').url()} alt={node.alt} />
            <figcaption>{node.caption}</figcaption>
          </figure>)
        }
      }
    }
  }
}
</script>

<static-query>
  {
    metaData{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
