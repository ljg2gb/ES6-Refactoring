// Refactor the Code Below Using the ES6 Method Listed
// Additionally, Prepare an Explanation for Why We Would
// Would or Wouldn't Want to Refactor Using that Method

// Spread
//combine the follow objects into an new object using the spread operator
const dog1 = {firstName: "Buckley", breed: "Lab Mix"}
const dog2 = {firstName: "Ginny", breed: "American Fox Hound"}

//solution
const dogs = {...dog1, ...dog2}

// Destructuring
//desctrure the following object into the object below
const buckley = {fullName: "Wiggley F. Buckley", favoriteFood: "Peanutbutter", favoriteActivity:"Dog Parking", leastFavoriteActivity:"riding in the car", bFF:"Diesel", }

//solution
const {fullName, bFF} = dogPairs

//result
dogPairs => {"Wiggley F. Buckley", "Diesel"}


// Arrow
buttonElement.addEventListener('click', function(event){
  alert('element clicked!')
})

//solution
buttonElement.addEventListener('click', ()=> alert('element clicked!'))
