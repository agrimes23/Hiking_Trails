const starWrapper = document.querySelector(".stars")
const stars = document.querySelectorAll('.stars a')

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherStar.classList.add("active");
      }
    })
    let ratingInput = document.createElement('input')

    ratingInput.setAttribute("type", "hidden")
    ratingInput.setAttribute("name", "difficulty")
    ratingInput.setAttribute("value", clickedIdx.toString())
    starWrapper.appendChild(ratingInput)
  })
})


const starQWrapper = document.querySelector(".stars-quantity")
const starsQ = document.querySelectorAll('.stars-quantity a')

starsQ.forEach((starQ, clickedIdxQ) => {
  starQ.addEventListener("click", () => {
    starQWrapper.classList.add("disabled");
    starsQ.forEach((otherStarQ, otherIdxQ) => {
      if (otherIdxQ <= clickedIdxQ) {
        otherStarQ.classList.add("active");
      }
    })
    let ratingInputQ = document.createElement('input')

    ratingInputQ.setAttribute("type", "hidden")
    ratingInputQ.setAttribute("name", "quality")
    ratingInputQ.setAttribute("value", clickedIdxQ.toString())
    starQWrapper.appendChild(ratingInputQ)
  })
})
