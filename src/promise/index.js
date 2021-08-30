const somethingWillHappen = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Logrado');
        }else{
            reject('ups');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))//response es la respuesta que obtuvo y la imprimimos
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('true');
            },2000)
        }else{
            const error = new Error('nop');
            reject(error);
        }
    });
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response =>{
        console.log('arrays of results ',response);
    })
    .catch(err=>{
        console.log(err);
    })