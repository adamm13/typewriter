const sentence = "Hey, Are you Learning How to Code like me?";


const animateString = function(str) {

  let increase = 50;
  let increment = increase++

  for (let letter of str) {

    let milliSecs = increase += increment;

    setTimeout(() => {
      process.stdout.write(letter);
    }, milliSecs); //milliSecs = callback to repeat

  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, increase)

};

animateString(sentence);

