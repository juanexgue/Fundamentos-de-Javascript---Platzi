
const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            let operationSuccessful = false;
        if(operationSuccessful){
            resolve("La operación fue exitosa")
        }else{
            reject("Fallo la operación")
        }
    }, 2000);
});

promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    });
