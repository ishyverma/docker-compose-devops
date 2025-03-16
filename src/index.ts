import express from "express";
import prisma from "./db";

const app = express();

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json({
    users
  })
})

app.post("/", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })
  res.json({
    message: "User created successfully"
  })
})

app.listen(3000) 