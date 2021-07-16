// Ejemplo 1
// import {p} from './Promise/main.js';
import {fromP, inputP} from './Promise/main.js';

addEventListener("DOMContentLoaded", function(e){
    let data = {
        id: "MyFormulario",
        metodo : "GET",
        input : [
            {
                tag: "INPUT",
                id: "myCedula",
                name: "myCedula",
                type: "number",
                placeholder: "Ingrese el N° de identificacion"
            }
        ]
    };

    let p = Promise.all([fromP(data), inputP(data)]);
    p.then((res)=>{
        res[0].children.MyFormulario.appendChild(res[1]);
        document.body.appendChild(res[0]);
    }).catch((res)=>{
        console.log(res);
    })










    // Ejemplo 1
    // p
    // .then((res)=>{
    //     console.warn("hola");
    //     return res;
    //     // document.body.append(res);
    // })
    // .then((res)=>{
    //     console.warn(`Todo ok Promesa 2`);
    //     return res;
    //     // document.body.append(res);
    // })
    // .catch((res)=>{
    //     console.error(res);
    //     // document.body.append(res);
    // })
    // .finally(()=>{
    //     console.log("Me ejecuto al final del THEN y del CATCH");
    // })

})


