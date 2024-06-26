const firstObj = {
  id: 1,
  firstName: "Matt",
};
const secondObj = {
  email: "test@test.com",
  phone: "123-123-1234",
};

const thirdObj = { ...firstObj, ...secondObj };
console.log(thirdObj);

const a = 9;
const b = 12;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
a > b ? console.log(a) : console.log(b);

const sentence = "I am a sentence";
const sentenceStr = sentence.split(" ");
console.log(sentenceStr);
const sentenceUpper = `${
  sentenceStr[0].charAt(0).toUpperCase() + sentenceStr[0].slice(1)
} ${sentenceStr[1].charAt(0).toUpperCase() + sentenceStr[1].slice(1)} ${
  sentenceStr[2].charAt(0).toUpperCase() + sentenceStr[2].slice(1)
} ${sentenceStr[3].charAt(0).toUpperCase() + sentenceStr[3].slice(1)}`;

console.log(sentenceUpper);

const alphaOrder = "Hi there";
const alphaSplit = alphaOrder.toUpperCase().split("").sort().join("").trim();
console.log(alphaSplit);
