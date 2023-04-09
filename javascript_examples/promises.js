function myFunction(input) {
    // Your function logic here, e.g., a calculation or an API call
    return input * 2;
}

function myFunction_5(input) {
    // Your function logic here, e.g., a calculation or an API call
    return input * 5;
}


function myFunctionAsync(input) {
    return new Promise((resolve, reject) => {
      try {
        // Simulate an asynchronous task using setTimeout
        setTimeout(() => {
          const result = myFunction(input);
        //   console.log("this is the result of my function", result)
        resolve(result);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

function myFunctionAsync_2(input) {
    return new Promise((resolve, reject) => {
        try {
        // Simulate an asynchronous task using setTimeout
        setTimeout(() => {
            const result = myFunction_5(input);
        resolve(result);
        }, 2000);
        } catch (error) {
        reject(error);
        }
    });
}

// myFunctionAsync(5)
// .then((result)=>{
//     console.log("this is the function inside then", result)
//     return myFunctionAsync_2(result)
// })
// .then((result)=>{
//     console.log("this is the final result ", result)
// })
// .catch((error)=>{
//     console.log("this is the function inside catch", error)
// })

const my_async_await_function = async (input) => {
    try {
        const result_1 = await myFunctionAsync_2(input)
        console.log(result_1)
        const result_2 = await myFunctionAsync(result_1)
        console.log(result_2)
    } catch (e) {
        console.log(e)
    }
}

my_async_await_function(5)