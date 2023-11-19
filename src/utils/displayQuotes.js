import getTags from './getTags.js'

function displayQuotes(wrapper, quotes) {
  wrapper.innerHTML = ``

  quotes.forEach(quote => {
    wrapper.innerHTML += `
    <div class="picture-quote">
      <div class="frame" style="background-image: url('./images/wallpaper${Math.floor(Math.random()*9)}.jpeg');">
        <div class="overlay">
          <h2>${quote.content}<br><cite>${quote.author}</cite></h2>
        </div>
      </div>
      <blockquote class="content">
        <p>${quote.content}</p>
        <cite><a href="#" class="link">${quote.author}</a></cite>
        <div class="tags">
          ${getTags(quote.tags)}
        </div>
      </blockquote>
    </div>
    `
  });
}

export default displayQuotes