import { gql } from "apollo-server-express";

export default gql`
  # Custom scalar
  scalar DateTime
  type Note {
    id: ID!
    content: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Query {
    Hello: String
    notes: [Note]
    note(id: ID!): Note
  }
  type Mutation {
    newNote(content: String!): Note
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
`;
