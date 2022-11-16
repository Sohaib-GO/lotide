
const reverse = function (input) {
  let word = "";
  for (let i = input.length - 1; i >= 0; i--) {
    word += input[i];
  }
  return word;
}

for (let i = 2; i < process.argv.length; i++) {
  console.log(reverse(process.argv[i]));
}


