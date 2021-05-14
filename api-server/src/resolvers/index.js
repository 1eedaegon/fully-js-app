// For CommonJS
import iso from "graphql-iso-date";
import Query from "./query.js";
import Mutation from "./mutation.js";

const { GraphQLDateTime } = iso;
const resolvers = { Query, Mutation, DateTime: GraphQLDateTime };
export default resolvers;
