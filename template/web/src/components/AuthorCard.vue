<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      :src="$urlForImage($static.settings.author.image, $static.metadata.sanityOptions).width(180).url()"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">{{ $static.settings.title }}</h1>

    <p class="author__intro">{{$static.settings.description}}</p>

    <p class="author__links">
      <a href="//twitter.com/sanity_io">Follow on Twitter</a>
      <a href="//github.com/sanity-io/sanity-template-gridsome-blog">GitHub</a>
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
    author {
      name
      image {
        asset {
          _id
          url
        }
        hotspot {
          x
          y
          width
          height
        }
        crop {
          top
          left
          right
          bottom
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    showTitle: Boolean
  }
}
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
