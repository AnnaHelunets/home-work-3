const languages = ["1-Pyton", "2-C++", "3-C#","4-PHP"]
let result = []

for (const language of languages) {
    let corectLanguages = language.split("-")
    console.log(corectLanguages);
    result.push(corectLanguages[1])
}
console.log(result);