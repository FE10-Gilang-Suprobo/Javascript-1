function ubahHuruf(sentence) {

    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let word = sentence.split(' ')
    let newSentence = []

    word.map(item => {
        let newWord = ``
        for(let i in item){
            let newIndex = str.indexOf(item[i]) + 10
            if(newIndex < str.length){
                newWord += str[newIndex]
            }else{
                newIndex = newIndex % 26
                newWord += str[newIndex]
            }
        }
        newSentence.push(newWord)
    })
    return newSentence.join(' ')
}

console.log(ubahHuruf("SEPULSA OKE"))
console.log(ubahHuruf("ALTERRA ACADEMY"))