function caesarCipher(offset, input) {

    let indexJump = offset % 26, outputStr = ''

    for(let i in input){
        let codeChar = input.charCodeAt(i) + indexJump
        if(codeChar <= 122 ){
            outputStr += String.fromCharCode(codeChar)
        }else{
            codeChar = (codeChar % 122) + 96
            outputStr += String.fromCharCode(codeChar)
        }
    }
    return outputStr
}

console.log(caesarCipher(3, "abc"))
console.log(caesarCipher(2, "alta"))