const pg = require("pg");

const client = new pg.Client({
  connectionString: "postgresql://sahil:mysecretpassword@localhost:5432/sahil",
});

client
  .connect()
  .then(() => {
    console.log("Connected to postgress");
  })
  .catch((err) => {
    console.log("insode in catch bl  ock");
    console.log(err);
  });

// client.connect((err) => {
//   if (err) {
//     console.log("Connection Error: ", err.stack);
//   } else {
//     console.log("Successfully connected to postgres");
//   }
// });

client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows[0]);
  }
});
