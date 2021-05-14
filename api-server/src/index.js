import express from "express";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server-express";

import db from "./db.js";
import models from "./models/index.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_CONN = process.env.DB_CONN || process.env.DB_HOST;

// Note entity and example: notes!: [Note]
// let notes = [
//   { id: "1", content: "나는 짱짱ㅁ맨", author: "gon" },
//   { id: "2", content: "개발을 잘하고  싶어", author: "dino" },
//   { id: "3", content: "잘보이고 싶어", author: "swttrp" },
// ];

// GQL
// Caution! Type of ID is String
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    Hello: String
    notes: [Note]
    note(id: ID!): Note
  }
  type Mutation {
    newNote(content: String!): Note
  }
`;
const resolvers = {
  Query: {
    Hello: () => "Hello world!",
    notes: async () => await models.Note.find(),
    note: async (parent, args) => await models.Note.findById(args.id),
  },
  Mutation: {
    newNote: async (parent, args) => {
      return await models.Note.create({
        content: args.content,
        author: "Gon",
      });
    },
  },
};

const app = express();
db.connect(DB_CONN);
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/api" });

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(PORT, () => console.log(`Now listening on wtih GraphQL: ${PORT}`));
