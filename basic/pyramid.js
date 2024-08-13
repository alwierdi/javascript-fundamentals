function pyramidStar(rows) {
  let result = '';
  for (let i = rows; i > 0; i--) {
    for (let j = 1; j <= rows; j++) {
      if (j >= i) {
        result += '* ';
      } else {
        result += ' ';
      }
    }
    result += '\n';
  }
  console.log(result);
}

pyramidStar(10);