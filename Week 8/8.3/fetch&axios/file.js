const axios = require("axios");

//GET
// async function abcd() {
//   console.log("hii");
//   const resu = await fetch("https://sum-server.100xdevs.com/todos");
//   const data = await resu.json();
//   console.log(data);
// }

// async function abcd() {
//   const resu = await axios.get("https://sum-server.100xdevs.com/todos");
//   console.log(resu.data);
// }

//POST
// async function abcd() {
//   //   const res = await fetch("http://localhost:3000/todos", {
//   const res = await fetch(
//     " https://httpdump.app/dumps/8e40fca9-5a0d-45c8-a957-e03ae05051f3",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authentication: "Bearer 123",
//       },
//       body: JSON.stringify({ name: "jack", surname: "sher" }),
//     }
//   );
//   const data = await res.text();
//   //   console.log(data);
// }

async function abcd() {
  //   const res = await axios.post("http://localhost:3000/todos");
  const res = await axios.post(
    " https://httpdump.app/dumps/8e40fca9-5a0d-45c8-a957-e03ae05051f3",
    { name: "jack", suname: "sher" },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    }
  );
  console.log(res.data);
}
abcd();
