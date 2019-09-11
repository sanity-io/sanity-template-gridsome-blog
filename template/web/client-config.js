module.exports = {
  sanity: {
    projectId: process.env.GRIDSOME_SANITY_PROJECT_ID || '<#< sanity.projectId >#>',
    dataset: process.env.GRIDSOME_SANITY_DATASET || '<#< sanity.dataset >#>'
  }
}
