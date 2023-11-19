

const displayButtons = (btnGroup, pages, activeIndex) => {
  // let btns = pages.map((_, pageIndex) => {
  //   return `<button class="btn ${
  //     activeIndex === pageIndex ? "btn-active" : ""
  //   }" data-index="${pageIndex}">${pageIndex + 1}</button>`
  // })

  // btns.unshift(`<button class="prevBtn">&LeftArrow;</button>`)
  // btns.push(`<button class="nextBtn">&RightArrow;</button>`)
  // btnGroup.innerHTML = btns.join("")

  btnGroup.innerHTML = ``
  btnGroup.innerHTML += `<button class="prevBtn">&LeftArrow;</button>`
  for (let i = 0; i < pages.length; i++) {
    btnGroup.innerHTML += `<button class="btn ${activeIndex === i ? "btn-active" : ""}" data-index="${i}">${i + 1}</button>`
  }
  btnGroup.innerHTML += `<button class="nextBtn">&RightArrow;</button>`


}

export default displayButtons