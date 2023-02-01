// Write your code below
const hasUniqueChars = (word) => { 
    for(let i = 0; i <= word.length; i++) {
        for(let j = i+1; j <= word.length; j++) {
            if(word[j] == word[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Crows"));
console.log(hasUniqueChars("Crocs"));
console.log(hasUniqueChars("Cross"));