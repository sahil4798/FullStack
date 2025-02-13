import express from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformantion = {
    token: req.body.token,
    id: req.body.user_identifier,
    amount: req.body.amount,
  };

  await db.balance.update({
    where: { userId: paymentInformantion.id },
    data: {
      amount: {
        increment: paymentInformantion.amount,
      },
    },
  });

  await db.onRampTransaction.update({
    where: { id: paymentInformantion.id },
    data: { status: "Success" },
  });

  res.status(200).json({ message: "captured" });
});

app.listen("3002", () => {
  console.log("Listing on port 3002");
});
