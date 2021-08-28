let type = document.querySelector("#typing");
let strings = [
  "full stack web developer",
  "mobile app developer",
  "competitive coder",
];
let stringIndex = 0;
let count = 0;
let typeEffect = (stringIndex) => {
  if (count < strings[stringIndex].length) {
    type.innerHTML += strings[stringIndex][count];
    count++;
    setTimeout(() => typeEffect(stringIndex), 150);
  } else {
    count = 0;
    strings.length - 1 > stringIndex ? stringIndex++ : (stringIndex = 0);
    setTimeout(() => {
      type.innerHTML = "";
      setTimeout(() => {
        typeEffect(stringIndex);
      }, 500);
    }, 1000);
  }
};
setTimeout(() => typeEffect(stringIndex), 1500);
