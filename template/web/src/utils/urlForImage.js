import urlBuilder from '@sanity/image-url'

const urlForImage = ({source, projectId, dataset}) => urlBuilder({projectId, dataset}).image(source)

export default urlForImage
