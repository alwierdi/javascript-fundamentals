/*

    -> Error = An object that is created to represent a problem that occurred during the execution of a program

    -> Error Handling adalah proses penanganan kesalahan pada sebuah program. (Network Errors) (Promise Rejection) (Async Await Errors) (Security Errors)

    -> try { } = menjalankan code yang mungkin error
    -> catch { } = menangani error yang terjadi dalam blok try
    -> finally { } = selalu dijalankan, baik terjadi error atau tidak

*/

try {
  console.log("object");
} catch (error) {
  console.error(error);
} finally {
  // CLOSE FILES
  // CLOSE CONNECTION
  // CLOSE SERVER
  console.log("This always executed");
}

// =====================================================================

try {
  const dividend = Number(window.prompt("Enter dividend :"));
  const advisor = Number(window.prompt("Enter advisor :"));
  const result = dividend / advisor;

  if (advisor === 0) {
    throw new Error("You can't divide by zero!");
  }

  if (isNaN(dividend) || isNaN(advisor)) {
    throw new Error("Values must be a numeber!")
  }

  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("Finish");
