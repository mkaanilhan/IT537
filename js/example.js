// comment

// var, let, const

//var name = 'kaan'


let number = 10

number = 25

const pi = 3.14

// cannot be altered pi = 3.15


//console.log(number)
//console.log(pi)


//primitives types -  string, number, boolean, undefined, null

//typeof

const isCorrect = true

let myNumber


//console.log(myNumber)
//console.log(typeof isCorrect)


//reference types -  object, array, function


const human = {
    family: ['mother', 'father'],
    eye: 'blue',
    height: 1.80,
    weight: '79 kg',
    age: '35',
    isMale: false,
    run: function () {
        return 'running'
    }
}


//new attribute
human.haveCar = true

// delete attirbute
delete human.haveCar

//console.log(human)


/*

function sum(num1, num2) {

    return num1 + num2

}

*/

const sum = (num1, num2) => num1 + num2

//console.log(sum(3, 5))



//traditional function

/*

 function run() {

    console.log('running')
    }
  
 */



const xyz = 'xyz'

//arrow function
const run = (value) => {

    //    console.log(value)

}


const walk = () => console.log('walkin...')


//walk()
//run('still running...')
//console.log(sum(3, 'kaan'))


//console.log(human.eye)

let spec = 'eye'

//console.log(human[spec])





//ARRAY



const people = []

people.push(human)

//console.log(people)



//list.push('renault')
//list.push('audi')


/**
 * for (let item of list) {

    console.log('item->' + item)
}
 * 
 */

/*

for (let index = 0; index < list.length; index++) {
    const element = list[index]

    // console.log('item->' + element)

}
*/

const car = null


if (car === 'bmw') {

    //console.log('you have bmw')
} else if (car === 'volvo') {

    // console.log('you do not have volvo')

} else {

    // console.log('you do not have bmw')

}


switch (car) {
    case 'mercedes':
        // console.log('you have mercedes')
        break

    case 'volvo':
        // console.log('you have volvo')
        break

    case 'bmw':
        // console.log('you have bmw...')
        break
    default:
        // console.log('you do not have car')

        break
}

const myNumber1 = '8'

//console.log(myNumber1 == 8)
//console.log(myNumber1 === '8')



const cars = ['bmw', 'mercedes', 'volvo', 'skoda', 'renault']

//forEach


cars.forEach((item, index) => {

    // console.log(item + '-' + index)

})

//filter - you should assing new array
const newCarList = cars.filter((item, index) => item === 'mercedes')

//console.log(cars)

//console.log(newCarList)


//map - you should assing new array

const newMapCarList = cars.map((item, index) => {


    return item.toUpperCase()
})

//console.log(newMapCarList)

//every, some return boolean


//const hasVolvo = cars.some(item => item === 'chery')
const hasEveryVolvo = cars.every(item => item !== 'volvo')

//console.log(hasEveryVolvo)

const firstName = 'kaan'
const surname = 'ilhan'

//const result = firstName + ' ' + surname

const result = `${firstName} ${surname}`
//console.log(result)