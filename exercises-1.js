//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){total *= a })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------


//need to fix for strings so it won't include 1 in the beginning
function reduce(array, callback){
    var result = array[0]
    var newArray = array.slice(1)
    forEach(newArray, function(el) {
        result = callback(result, el)
    })
    return result
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24)
// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    var newArray = []
    forEach(array, function(element){
        newArray.push(callback(element))
    })
    return newArray
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    var newArray = []
    map (array, function(element) {
        if (callback(element)) {
            newArray.push(element)
        }
    })
    return newArray
}

// tests
// ---
var evens = filter([1, 2, 3, 4 , 5 ,6], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)
