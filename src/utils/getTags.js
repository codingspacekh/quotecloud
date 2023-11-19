const getTags = (tags) => {
  let tagContents = ''
  for (let i = 0; i < tags.length; i++) {
    tagContents += `<a href="#" class="link tag-link">${tags[i]}</a>`
  }
  return tagContents
}

export default getTags