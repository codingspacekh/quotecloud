const paginate = (quotes) => {
  let quotesPerPage = 10
  let numberOfPages = Math.ceil(quotes.length / quotesPerPage)
  // const newQuotesPage = Array.from({length: numberOfPages}, (_, index) => {
  //   let start = index * quotesPerPage
  //   let end = start + quotesPerPage
  //   return quotes.slice(start, end)
  // })

  const allPages = []

  for (let index = 0; index < numberOfPages; index++) {
    let start = index * quotesPerPage
    let end = start + quotesPerPage
    let quotesInAPage = quotes.slice(start, end)
    // console.log(quotesInAPage)
    allPages.push(quotesInAPage)
    
  }

  return allPages
}


export default paginate