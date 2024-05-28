const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    name: "jack-papa",
    age: "22",
    blood: "O+",
    kidneys: [{ healthy: false }],
  },
];

app.get("/", (req, res) => {
  const jackKidney = users[0].kidneys;
  const noOfKidney = jackKidney.length;
  let noOfHealthyKidney = 0;
  for (let i = 0; i < noOfKidney; i++) {
    if (jackKidney[i].healthy) {
      noOfHealthyKidney++;
    }
  }
  const noOfUnheathyKidney = noOfKidney - noOfHealthyKidney;

  res.json({ noOfKidney, noOfHealthyKidney, noOfUnheathyKidney });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({ message: "done" });
});

app.put("/", (req, res) => {
  const isAtleastOneHealthyKidney = isAnyUnhealthyKidney();

  if (isAtleastOneHealthyKidney) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({ message: "done" });
  } else {
    res.status(411).json({ message: "there is no unheathy kidney" });
  }
});

app.delete("/", (req, res) => {
  const isAnyUnhealthy = isAnyUnhealthyKidney();

  if (isAnyUnhealthy) {
    const newKidneys = users[0].kidneys.filter((e) => {
      if (e.healthy) {
        return e;
      }
    });
    users[0].kidneys = newKidneys;
    res.json({ messsage: "done" });
  } else {
    res.status(411).json({ message: "you don't have any unhealthy kidney" });
  }
});

const isAnyUnhealthyKidney = () => {
  let isAnyUnhealthy = false;
  users[0].kidneys.map((p) => {
    if (!p.healthy) {
      isAnyUnhealthy = true;
    }
  });

  return isAnyUnhealthy;
};

app.listen(3000);
