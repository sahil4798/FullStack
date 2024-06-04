const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/onepeice"
);
const Yonko = mongoose.model("Yonkos", {
  name: String,
  devilFruit: String,
  bounty: Number,
});

const younko = new Yonko({
  name: "Luffy",
  devilFruit: "Gomu-Gomu",
  bounty: 3000000000,
});

younko.save();

// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://SahilNextJs:l2O8bj5Xe8d84JFg@cluster0.bs1oqqy.mongodb.net/onepeice"
// );

// const devilFruits = mongoose.model("devilFruits", {
//   name: String,
//   holder: String,
// });

// const fruit1 = new devilFruits({
//   name: "Gura Gura no Mi",
//   holder: "Blackbeard",
// });

// fruit1.save();
