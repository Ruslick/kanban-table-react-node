const express = require("express");
const fs = require("fs");
// const {Client} = require('pg')

// const client = new Client({database: 'chat',user:'postgres'})



const app = express();

const PORT = process.env.PORT || 4100;
// client.connect()


app.listen(PORT, () => {
	console.log(`server started at ${PORT} port`);
});

app.get("/", async (req, res) => {
  // const dbResponse = await client.query("select * from users")
  console.log(dbResponse.rows)
});

app.post("/", (req, res) => {
	res.send(JSON.stringify({ message: "done" }));
});
