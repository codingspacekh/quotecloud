

let pageIndex = 0

window.addEventListener("DOMContentLoaded", async () => {
  let url = "https://api.quotable.io/authors?page="

  const moreAuthorBtn = document.querySelector("#moreAuthorBtn")
  const authorWrapper = document.querySelector(".author-wrapper")
  authorWrapper.innerHTML = ``

  moreAuthorBtn.addEventListener("click", async () => {
    pageIndex = pageIndex + 1
    try {

      let response = await fetch(url + `${pageIndex}`)
      let data = await response.json()

      let authors = data.results
      authorWrapper.innerHTML = ``
      
      for (let i = 0; i < authors.length; i++) {
        let currentAuthor = authors[i]
        authorWrapper.innerHTML += `
        <div class="author">
          <h4>${currentAuthor.name}</h4>
          <p>${currentAuthor.bio}</p>
          <a href="${currentAuthor.link}" target="_blank">Detail</a>
        </div>
        `
      }

      
    } catch (error) {
      console.log("some error occurred")
    }
  })


})