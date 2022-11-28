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
    ratingInput.setAttribute("value", clickedIdx)
    starWrapper.appendChild(ratingInput)

  })
})
