function printName() {
  const helloName = "Hi John";
  return function () {
    return helloName;
  };
}
const inner = printName();
console.log(inner());
