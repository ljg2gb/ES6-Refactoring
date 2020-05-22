document.addEventListener('DOMContentLoaded', ()=>{
// Refactor the Code Below Using the ES6 Method Listed
// Additionally, Prepare an Explanation for Why We Would
// Would or Wouldn't Want to Refactor Using that Method


// Spread
//combine the follow objects into a new object using the spread operator
const dogInfo1 = {firstName: "Buckley", breed: "Lab Mix"}
const dogInfo2 = {birthday: "May 20, 2017", favoriteActivity: "Rolling in the dirt"}
const dogs = {...dogInfo1, ...dogInfo2}

console.log(dogs)



// result
// console.log(newObject)



// Destructuring
//desctrure the following object to produce the result below
//consider first how you would do it without destructuring
const buckley = {fullName: "Wiggley F. Buckley", favoriteFood: "Peanutbutter", favoriteActivity:"Rolling in the dirt", leastFavoriteActivity:"riding in the car", bFF:"Diesel", }
const forever = `${buckley.fullName} and ${buckley.bFF} forever`

console.log(forever)




//result
//console.log will produce "Wiggley F. Buckley and Diesel forever"




//Object.assign()
//use Object.assign() to non-destructively combine the cats object and your newObjectup above into a "pets" object
const cats = {fullName:'Pepper', breed:'Persian'}
const pets = Object.assign(cats, dogs)

console.log(pets)




//result

})