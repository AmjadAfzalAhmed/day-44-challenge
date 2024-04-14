// Creation of module 1 for export 
// Firstly we created a class with executor and parameters that it shall take
class identity{
    constructor(name,idNum){// inside the class we always use this keyword for obtaining data from the current context
        this.name = name,
        this.idNum = idNum
    }


executor () {
    return `My name is ${this.name} and my ID Number is ${this.idNum}`
    }
};

// here we have exported it for execution in the next file where it will be imported 
export{identity}

// from the lines below we create module 2 that will import module 1 in it for execution
// both the export and import modules are to be executed in separate file

import {identity} from "./Question131.js";//here we imported the module class identity

let identifier = new identity('Amjad','181989');//this is the instance created for class identity

console.log(identifier.executor());//final execution of the code 