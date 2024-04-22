// index.js

// Callbacks
const handleClick = (ramen) => {
  let ramenComponent = document.querySelector('#ramen-detail')
  let h2 = document.querySelector('.name')
  h2.textContent = ramen.name
  
  let ramenImg = document.querySelector('.detail-image')
  ramenImg.src = ramen.image

  let restaurantName = document.querySelector('.restaurant')
  restaurantName.textContent = ramen.restaurant
};

const addSubmitListener = () => {
  let form = document.querySelector('#new-ramen')
  // console.log(form)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e)
    let nameValue = (e.target[0].value)
    let restaurantValue = e.target[1].value;
    let imageValue = e.target[2].value;
    let ratingValue = e.target[3].value;
    let commentValue = e.target[4].value;

    let newH2 = document.querySelector('.name');
    newH2.textContent = nameValue

    let newRamenImg = document.querySelector('.detail-image');
    newRamenImg.src = imageValue;
    let newRestaurantName = document.querySelector('.restaurant');
    newRestaurantName.textContent = restaurantValue
 
    const newRating = document.querySelector('#rating-display')
    newRating.textContent = ratingValue;
    const newComment = document.querySelector('#comment-display')
    newComment.textContent = commentValue;
    
  })
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(ramenData => displayRamensOnViewPage(((ramenData))))
};

const displayRamensOnViewPage = (ramensArray) => {
  let ramenDiv = document.querySelector('#ramen-menu')

  ramensArray.forEach(item => {
    let imgTags = document.createElement('img')
    imgTags.src = item.image
    imgTags.alt = item.name
    ramenDiv.appendChild(imgTags)

    imgTags.addEventListener('click', () => handleClick(item))

    
  });

}

const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()



}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
