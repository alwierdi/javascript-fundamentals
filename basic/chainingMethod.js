let username = "     aLwiERdi  "

// ----- NO METHOD CHAINING -----

username = username.trim()
let letter = username.charAt(0)
letter = letter.toUpperCase()

let extractChars = username.slice(1)
extractChars = extractChars.toLowerCase()
username = letter + extractChars

console.log(username)

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)