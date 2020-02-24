document.addEventListener('DOMContentLoaded', ()=>{
// Refactor the Code Below Using the ES6 Method Listed
// Additionally, Prepare an Explanation for Why We Would
// Would or Wouldn't Want to Refactor Using that Method


// Spread
//combine the follow objects into an new object using the spread operator
const dog1 = {firstName: "Buckley", breed: "Lab Mix"}
const dog2 = {firstName: "Ginny", breed: "American Fox Hound"}


const newObject = {...dog1, ...dog2}
// result
console.log(newObject)



// Destructuring
//desctrure the following object to produce the result below
//consider first how you would do it without destructuring
const buckley = {fullName: "Wiggley F. Buckley", favoriteFood: "Peanutbutter", favoriteActivity:"Dog Parking", leastFavoriteActivity:"riding in the car", bFF:"Diesel", }

const {fullName, bFF} = buckley

//result
console.log(fullName)



//Object.assign()
//use Object.assign() to non-destructively combine the cats object and your newObjectup above into a "pets" object
const cats = {fullName:'Pepper', breed:'Persian'}

const pets = Object.assign({},newObject, cats)


//result
console.log(pets)

})
