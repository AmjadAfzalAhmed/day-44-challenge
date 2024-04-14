"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = void 0;
// Creation of module 1 for export 
// Firstly we created a class with executor and parameters that it shall take
class identity {
    constructor(name, idNum) {
        this.name = name,
            this.idNum = idNum;
    }
    executor() {
        return `My name is ${this.name} and my ID Number is ${this.idNum}`;
    }
}
exports.identity = identity;
;
let identifier = new identity('Amjad', '181989'); //this is the instance created for class identity
console.log(identifier.executor()); //final execution of the code 
