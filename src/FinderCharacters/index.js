const doSomethingAsync = () =>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('So some'),3000)
        : reject(new Error('Test error'));
    });
}
const anotherFunction = async () =>{
    /*a clave es recordar que si una función 
    regresa un promesa, podemos usar el keyword
     await, que le indicia al navagador: 
     “Espera a que la promesa se resuleva y 
     almacena su resultado en esta variable”.
      Todo esto toma lugar dentro de una función
       asincrona, asi que usamos async para 
       lograr esto */
    
    try {
         const something = await doSomethingAsync();
         console.log(something);
    }catch{
        console.log("error")
    }
    
}

console.log('before ');
anotherFunction();
console.log('after ');