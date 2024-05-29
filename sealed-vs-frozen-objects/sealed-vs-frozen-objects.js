let mySealedObject = Object.seal({ price: 25 })
let myFrozenObject = Object.freeze({ price: 30 })

delete mySealedObject.price
delete myFrozenObject.price

console.log(mySealedObject) //prints {price: 25}
console.log(myFrozenObject) //prints {price: 30}

mySealedObject.price = 40
myFrozenObject.price = 100

console.log(mySealedObject) //prints {price: 40}
console.log(myFrozenObject) //prints {price: 30}
