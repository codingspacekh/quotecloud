import { SINGLE_QUOTE_URL } from "../secrets/url.js"

const getRandomQuote = async () => {

  const todayQuoteWapper = document.querySelector('.today-quote-wrapper')

  todayQuoteWapper.innerHTML = `
  <div class="loading">
    <div class="circle">
          
    </div>
  </div>
  `
  try {
    const response = await fetch(SINGLE_QUOTE_URL)
    const data = await response.json()

    let quote = data[0]
    // console.log(quote)
    let imgIndex = Math.floor(Math.random()*9) 
    todayQuoteWapper.innerHTML = `
    <div class="picture-quote">
        <div class="frame" style="background-image: url('./images/wallpaper${imgIndex}.jpeg');">
          <div class="overlay">
            <h2>${quote.content} <br><cite>${quote.author}</cite></h2>
          </div>
        </div>
        <blockquote class="content">
          <p>${quote.content}</p>
          <cite><a href="author.html?slug=${quote.authorSlug}" class="link">${quote.author}</a></cite>
        </blockquote>
    </div>
    
    `

  } catch (error) {
    console.log('some error occurred:', error.message)
  }
}

export default getRandomQuote