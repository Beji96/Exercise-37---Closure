function printName() {
  const helloName = "Hi Flavius";
  return function () {
    return helloName;
  };
}
const myFunc = printName();
console.log(myFunc());
