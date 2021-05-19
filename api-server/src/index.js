import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import helmet from "helmet";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createComplexityLimitRule } from "graphql-validation-complexity";

import db from "./db.js";
import models from "./models/index.js";
import typeDefs from "./apiSchema.js";
import resolvers from "./resolvers/index.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_CONN = process.env.DB_CONN || process.env.DB_HOST;

const getUser = async (token) => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error("[ERROR]: Session invalid.");
    }
  }
};
db.connect(DB_CONN);
const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          "'self'",
          "'unsafe-inline'",
          "data:",
          "localhost",
          "fonts.googleapis.com",
          "fonts.gstatic.com",
          "cdn.jsdelivr.net",
        ],
      },
    },
  })
);
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
  // Make context how resolvers refer to models
  // Must be *Object lieteral*
  context: async ({ req }) => {
    const token = req.headers.authorization;
    const user = await getUser(token);
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
