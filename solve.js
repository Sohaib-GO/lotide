const titleCase = function (text) {
  if (text.length === 0) {
    return "";
  } else {
    let words = text.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
};

console.log(titleCase(""));
