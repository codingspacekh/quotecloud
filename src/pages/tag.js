import fetchQuotes from "../utils/fetchQuotes.js"
import displayQuotes from "../utils/displayQuotes.js"

async function fetchTags() {
  let url = "https://api.quotable.io/tags"
  try {
    let response = await fetch(url)
    let data = await response.json()
    return data
  } catch (error) {
    console.log("some error occured")
  }
}

window.addEventListener("DOMContentLoaded", async () => {

  const tagsWrapper = document.querySelector(".tags-wrapper")
  const quotesWrapper = document.querySelector(".quotes-wrapper")

  let tags = await fetchTags()

  for (let i = 0; i < tags.length; i++) {
    let currentTag = tags[i]
    tagsWrapper.innerHTML += `
    <button id="tagBtn" data-tagslug="${currentTag.slug}">${currentTag.name}</button>
    `
  }

  const tagsBtn = document.querySelectorAll("#tagBtn")
  // console.log(tagsBtn)

  for (let i = 0; i < tagsBtn.length; i++) {
    let currentTagBtn = tagsBtn[i]

    currentTagBtn.addEventListener("click", async (e) => {
      let tagSlug = currentTagBtn.dataset.tagslug

      // let quotes = await 
      let url = "https://api.quotable.io/quotes?limit=6&tags=" + tagSlug

      let quotes = await fetchQuotes(url)
      displayQuotes(quotesWrapper, quotes)

      // console.log(quotes)
      
    })

  }


})