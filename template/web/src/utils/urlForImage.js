import urlBuilder from '@sanity/image-url'

const urlForImage = (source, data) => {
  const isBrowser = typeof window !== 'undefined'
  const { projectId, dataset } = data
  const builder = urlBuilder({ projectId, dataset }).image(source)
  const dpr = isBrowser ? Math.min(Math.ceil(window.devicePixelRatio || 1), 3) : 1
  return dpr > 1 ? builder.dpr(dpr) : builder
}

export default urlForImage
