const my_function = () => {
    console.log("This is my_function and is a callback")
}

const my_other_function = () => {
    console.log("This is my_other_function and is a callback")
}

setTimeout(my_function, 5000)
setTimeout(my_other_function, 1000)
// console.log("this is a message in the main thread")