


export function fromP({...arg}){
    return new Promise((resolve, reject)=>{
        let fragmen = new DocumentFragment();
        if(Object.values(arg).length >= 2){
            let form = document.createElement("FORM");
            form.id = arg.id;
            form.action = arg.metodo;
            fragmen.append(form);
            return resolve(fragmen);
        }else{
            return reject({error: `Error en la promesa fromP`});
        }
    })
}

export function inputP({...arg}){
    return new Promise((resolve,reject)=>{
        if(arg.input.length){
            let fragmenI = new DocumentFragment();
            for (let i = 0; i <  arg.input.length; i++) {
                let input = document.createElement(arg.input[i].tag);
                for(let attr in arg.input[i]){
                    input[attr] = arg.input[i][attr];
                }
                fragmenI.appendChild(input);
            }
            return resolve(fragmenI);
        }else{
            return reject({error: `Error en la promesa inputP`});
        }
    })
}












// Ejemplo 1
// export const p = new Promise((resolve, reject)=>{
//     if(true){
//         return resolve(f());
//     }else{
//         return reject(`Todo Mal Promesa 1`);
//     }
// });
 
// function f(){
//     return new Promise((resolve, reject)=>{
//         if(true){
            
//             return resolve(f2());
//         }else{
//             return reject(`Todo Mal Promesa 2`);
//         }
//     })
// }
// function f2(){
//     return new Promise((resolve, reject)=>{
//         if(true){
//             return resolve(`Todo ok Promesa 3`);
//         }else{
//             return reject(`Todo Mal Promesa 3`);
//         }
//     })
// }