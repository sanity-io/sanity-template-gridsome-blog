import urlBuilder from '@sanity/image-url'

const urlForImage = (source, data) => {
  const {projectId, dataset} = data
  return urlBuilder({projectId, dataset}).image(source)
}

export default urlForImage
