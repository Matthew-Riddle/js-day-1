/*
null
undefined
String
boolean
number
object
*/

// var x = 5

// = >

// console.log(typeof x)
// console.log(typeof undefined) // object
// console.log(typeof null) // object or null
// console.log(typeof { a: 'Hello' }) // object
// console.log(typeof 'Hello') // String
// console.log(typeof true) // boolean
// console.log(typeof (a => a + 1)) // function

// var y

// console.log(y)
// console.log(z)

// var addTen = a => {
//   var sum
//   var i
//   sum = 0
//   for (i = 0; i < 10; i++) {
//     sum = a + i
//   }
//   return i
// }

// console.log(addTen(90))

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array)

// array.push(11)

// console.log(array)

// array.pop()

// console.log(array)

// array.unshift(5)

// console.log(array)

// array.shift()

// console.log(array)

// array.push('Hello')

// console.log(array)

// console.log(array[11])

// const obj = {
//   a: 'Hello',
//   b: 5,
//   c: true,
//   d: [1, 2, 3, 4, 5],
//   e: {
//     key: "I'm inside you"
//   },
//   f: undefined,
//   g: null
// }

// const { a, diddlySquat, b, e } = obj
// const { key } = e

// let c = b + 50
// console.log(c) // 55

// console.log(key)

// console.log(a)
// console.log(diddlySquat)
// console.log(obj)

// obj.a = 'hello'
// console.log(obj.a)

// obj.diddlySquat = 'Duddly'
// console.log(obj.diddlySquat)

// console.log(Object.entries(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log({ obj, a: 'testing', new: 'new' })

// const arr1 = [1, 2, 'Some weird string', 4, 5]

// console.log(...arr1)

// const arr2 = [6, 7, 8, 9, 10]

// const arr3 = [...arr1, ...arr2]

// console.log(arr3)

// const [, , whatever] = arr1

// console.log(whatever) // 3

const add = (a, b) => a + b

const logAll = (...things) => console.log(things)

logAll(5, 'Hello', 'Flying RattleSnakes', true, 'Oh no!')

console.log(add(1, 2, 3, 50, 6000, 20))

const objDestructuring = ({ a }, b, g) => console.log(a, b, g)
const obj = { a: 'Hello' }
const { a } = obj
objDestructuring({ a }, 'world', '!')

const arrDestructuring = ([, , a], b, g) => console.log(a, b, g)
arrDestructuring([1, 2, 3], ' blah', 'blah')

const defaultParams = (a, b = 10) => a + b
console.log(defaultParams(2, 5))
