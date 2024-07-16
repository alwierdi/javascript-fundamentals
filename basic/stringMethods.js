let userName = "alwi Erdi"
/*
    userName.charAt(0)  // untuk menembak index target
    userName.indexOf("E")  // untuk menghitung (target) index keberapa
    userName.lastIndexOf("r")  // untuk menghitung jumlah index sebelum (target)
    userName.length()  //untuk menghitung panjang string
    userName = userName.trim()  // untuk menghilangkan spasi
    userName = userName.toUpperCase()  // untuk kapital
    userName = userName.toLowerCase()  // untuk !kapital
    userName = userName.repeat(3)
    userName = userName.startsWith(" ")  // untuk cek apakah string diawali oleh (target)
    userName = userName.endsWith(" ")  // untuk cek apakah string diakhiri oleh (target)
    userName = userName.includes(" ")  // untuk cek apakah ada (target) di dalam string
*/

console.log(userName)

let phoneNumber = "0813-9895-5857"
/*
phoneNumber = phoneNumber.replaceAll("-", "")
phoneNumber = phoneNumber.padStart(20, "0")
phoneNumber = phoneNumber.padEnd(20, "0")
*/
console.log(phoneNumber)

// STRING SLICING

const fullName = "Alwi Erdi Musthafa"

let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
let firstChar = fullName.slice(0,1)
let lastChar = fullName.slice(-2)  // jika menggunakan negative index maka perhitungan dimulai dari belakang

console.log(firstName)
console.log(lastName)
console.log(firstChar)
console.log(lastChar)

const email = "alwi.erdi@gmail.com"
let user = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(user)
console.log(extension)