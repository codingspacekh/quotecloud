import { FAMOUS_QUOTE_URL } from "../secrets/url.js"
import displayQuotes from "./displayQuotes.js"

const getFamousQuotes = async () => {

  const quotesWrapper = document.querySelector('.quotes-wrapper')

  try {
    const response = await fetch(FAMOUS_QUOTE_URL+`&page=${Math.floor(Math.random()*100)}`)
    const data = await response.json()

    let quotes = data.results

    displayQuotes(quotesWrapper, quotes)

  } catch (error) {
    console.log('some error occurred:', error.message)
  }
}



export default getFamousQuotes