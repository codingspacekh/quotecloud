import fetchQuotes from "../utils/fetchQuotes.js"
import { SEARCH_URL, DEFAULT_URL } from "../secrets/url.js"
import displayQuotes from "../utils/displayQuotes.js"
import paginate from "../utils/paginate.js"
import displayButtons from "../utils/displayButtons.js"

let index = 0
let pages = []

window.addEventListener("DOMContentLoaded", async () => {

  const title = document.querySelector('#quotes .title')
  const quotesWrapper = document.querySelector('.quotes-wrapper')
  const btnGroup = document.querySelector('.btn-group')

  const params = new URLSearchParams(window.location.search)
  let query = params.get('query')

  let quotes;
  
  if (!query) {
    title.textContent = `QUOTES`
    quotes = await fetchQuotes(DEFAULT_URL)
  } else {
    title.textContent = `${query.toUpperCase()} QUOTES`
    quotes = await fetchQuotes(SEARCH_URL+query)
  }

  // displayQuotes(quotesWrapper, quotes)

  // console.log(quotes)
  pages = paginate(quotes)
  // console.log(pages)

  // console.log(pages.length)

  displayQuotes(quotesWrapper, pages[index])
  displayButtons(btnGroup, pages, index)


  btnGroup.addEventListener('click', (e) => {
    let btn = e.target
  
    if (btn.classList.contains('btn-group')) return
    if (btn.classList.contains('btn')) {
      index = parseInt(btn.dataset.index)
    }
    if (btn.classList.contains('nextBtn')) {
      index++
      if (index > pages.length - 1) {
        index = 0
      }
    }
  
    if (btn.classList.contains('prevBtn')) {
      index--
      if (index < 0) {
        index = pages.length - 1
      }
    }
    displayQuotes(quotesWrapper, pages[index])
    displayButtons(btnGroup, pages, index)
  })

})