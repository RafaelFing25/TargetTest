function revese(word) {
    const splitedWord = word.split('')

    const reversed = []

    for(let i = splitedWord.length -1; i >= 0; i--){
        reversed.push(splitedWord[i ]) 
    }

    return reversed.join('')
}

console.log(revese("target"))
console.log(revese("arara"))