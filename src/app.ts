import express from "express";

const app = express();

app.post("/register", async (req: TypedRequestBody<RegisterForm>, res) => {
  console.log(`Registering user ${req.body.email}`);

  res.status(201).json(req.body);
});

app.post("/login", async (req: TypedRequestBody<RegisterForm>, res) => {
  console.log(`Login with user ${req.body.email}`);

  res.json(req.body);
});

app.listen(8080, () => {
  console.log("Running at 8080");
});
