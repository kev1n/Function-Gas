import { Buffer } from "buffer/";
import keccak256 from "keccak256";
window.Buffer = window.Buffer || Buffer;


export default function bruteforce(funcName, functionArguments) {
    function validateHash(hash) {
        return hash.slice(0,4) === "0000"
    }

    function findScore(funcName) {
        console.log(funcName + functionArguments)
        const hash = keccak256(funcName + functionArguments).toString('hex');
        //console.log(hash)
        if (validateHash(hash)) {
            console.log(funcName + functionArguments)
        }
        return
    }
    function findString() {
        while (true) {
            findScore(funcName + (Math.random()).toString(36).substring(2))
        }
        

    }
    
    findString()

}