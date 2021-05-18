// For CommonJS
import iso from "graphql-iso-date";
import Query from "./query.js";
import Mutation from "./mutation.js";
import Note from "./note.js";
import User from "./user.js";

const { GraphQLDateTime } = iso;
const resolvers = { Query, Mutation, DateTime: GraphQLDateTime, Note, User };
export default resolvers;
