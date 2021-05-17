import { gql } from "apollo-server-express";

export default gql`
  # Custom scalar
  scalar DateTime
  type Note {
    id: ID!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String!
    notes: [Note]!
  }
  type Query {
    Hello: String
    notes: [Note]
    note(id: ID!): Note
    user(username: String): User
    users: [User]!
    me: User!
  }
  type Mutation {
    newNote(content: String!): Note
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String!, email: String!, password: String!): String!
  }
`;
