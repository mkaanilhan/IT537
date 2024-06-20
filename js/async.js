/*
let pizza

const orderPizza = () => {

    console.log('order pizza')

    setTimeout(() => {
        pizza = 'new york pizza'
        console.log(`${pizza} is preparing`)
    }, 3000)

    console.log(`${pizza} is ready`)

}

orderPizza()

*/

//Callbacks

/*

const orderPizza = (callback) => {

    console.log(`new york pizza is ordered`)

    callback()

}

const preparePizza = (callback) => {
    setTimeout(() => {
        console.log(`new york pizza is preparing`)
    }, 3000)

    callback()
}

const cookPizza = () => {

    setTimeout(() => {
        console.log(`new york pizza is ready`)
    }, 5000)

}

orderPizza(() => preparePizza(() => cookPizza()))

*/

// promise .then .catch .finally

/*

const orderPizza = (value) => {

    return new Promise((resolve, reject) => {

        if (value.includes('pizza')) {
            console.log(`${value} is ordered`)
            resolve(value)
        } else {
            reject('out of stock')
        }

    })

}

const preparePizza = (value) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(`${value} is preparing`)
            resolve(value)
        }, 3000)

    })


}

const cookPizza = (value) => {

    setTimeout(() => {
        console.log(`${value} is ready`)
        //resolve('new york pizza')
    }, 5000)
}

*/

/*
const response = orderPizza('new york pizza')
    .then((res) => preparePizza(res))
    .then((res) => cookPizza(res))
    .catch((err) => console.log(err))

*/

// async - await

/*

const pizzaProcess = async () => {

    try {

        const order = await orderPizza('new york')
        const prepare = await preparePizza(order)
        cookPizza(prepare)

    } catch (error) {
        console.log(error)
    }

}

pizzaProcess()

*/

/*

//callback example

const sayYourName = (callback) => {
    callback()
}

const myName = () => {
    console.log('kaan from callback')
}

sayYourName(myName)

*/

const getData = async () => {

    /*

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res2) => console.log(res2))

    */

    //GET

    /*
    const responseMain = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'

    })

    const responseData = await responseMain.json()

    console.log(responseData)

    */

    const responseMain = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        data: JSON.stringify({
            email: 'kaan@mail.com',
            password: '1234'

        })

    })

    console.log(responseMain)

}

getData()