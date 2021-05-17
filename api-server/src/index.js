import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { ApolloServer } from "apollo-server-express";

import db from "./db.js";
import models from "./models/index.js";
import typeDefs from "./apiSchema.js";
import resolvers from "./resolvers/index.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_CONN = process.env.DB_CONN || process.env.DB_HOST;

const getUser = (token) => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error("[ERROR]: Session invalid.");
    }
  }
};
const app = express();
db.connect(DB_CONN);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Make context how resolvers refer to models
  // Must be *Object lieteral*
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user };
  },
});
// Accept apollo graphql middleware
server.applyMiddleware({ app, path: "/api" });

app.get("/", (req, res) => {
  res.send("Please use graphql api");
});

app.listen(PORT, () =>
  console.log(
    `Now listening on wtih GraphQL at http://localhost:${PORT}${server.graphqlPath}`
  )
);
