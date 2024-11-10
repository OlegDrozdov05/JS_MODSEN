const message = "This is a spam message"
const hasForbiddenWords = forbiddenWords.some(word => message.includes(word));
console.log(hasForbiddenWords)
