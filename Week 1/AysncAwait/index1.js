function myAsync() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Hii there got promise resolved");
    }, 2000);
  });
}

async function main() {
  //   myAsync().then((d) => {
  //     console.log(d);
  // });
  let value = await myAsync();
  console.log("hii there 1");
  console.log(value);
}

main();

console.log("hii there 2");
