<template>
<div>
<PortableText
    :class="className"
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metaData.sanityOptions.projectId"
    :dataset="$static.metaData.sanityOptions.dataset"
  />
</div>
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import urlForImage from '../utils/urlForImage'


export default {
  props: ['blocks', 'className'],
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({node}) => (<figure>
          <img src={this.urlForImage(node).auto('format').url()} alt={node.alt} />
            <figcaption>{node.caption}</figcaption>
          </figure>)
        }
      }
    }
  },
  methods: {
    urlForImage: function(source) {
      const {projectId, dataset} = this.$static.metaData.sanityOptions
      return urlForImage({source, projectId, dataset})
    }
  },
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
