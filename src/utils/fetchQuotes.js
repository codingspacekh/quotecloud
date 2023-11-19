const fetchQuotes = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    let quotes = data.results

    // console.log(quotes.length)
    return quotes

  } catch(error) {
    console.log('some error may occur', error.message)
  }
}

export default fetchQuotes