import getFamousQuotes from "../utils/getFamousQuotes.js"
import getRandomQuote from "../utils/getRandomQuote.js"

window.addEventListener("DOMContentLoaded", async () => {

  getRandomQuote()

  const randomBtn = document.querySelector('#randomQuoteBtn')

  randomBtn.addEventListener('click', getRandomQuote)

  getFamousQuotes()


  const searchForm = document.querySelector('#searchForm')

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let form = new FormData(searchForm)

    // let searchTerm = e.target.children[0].value
    let searchTerm = form.get("searchTerm")

    window.location.href = `quote.html?query=${searchTerm}`
  })


})