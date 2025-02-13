const express = require("express");
const zod = require("zod");

const app = express();

const schema = zod.array(zod.number());
const AuthSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(401).json({ message: "input is invalid" });
  } else {
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + " kidneys");
  }

  //   const { email, password } = req.headers;
  //   const cret = { email, password };
  //   const response2 = AuthSchema.safeParse(cret);
  //   console.log(response2);
  //   if (!response2.success) {
  //     res.status(401).json({
  //       message: "wrong cretidentials",
  //     });
  //   } else {
  //     res.json({
  //       message: "Login successful",
  //     });
  //   }
});

app.listen(3000);
