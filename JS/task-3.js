const languages = ["Pyton", "C++", "C#","PHP"]
const languageToFind = "Java Script"

for (const language of languages) {
    language === languageToFind 
    ? console.log("Java Script є в списку") 
    : console.log("Значення Java Script в списку немає, додаємо в масив");
}
languages.push("Java Script")
console.log(languages);