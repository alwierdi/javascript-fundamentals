const length = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*~";

function generatePass(
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  let allowedChars = "";
  let key = "";

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected!)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    key += allowedChars[randomIndex];
  }

  return key;
}

const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const pw = generatePass(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password : ${pw}`);