import express from "express";
import ApolloServer from "apollo-server-express";
import gql from "gql";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(PORT, () => console.log(`Now listening on: ${PORT}`));
