import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { IS_LOGGED_IN } from "./cache";
import GlobalStyle from "./components/GlobalStyle";
// import { cache } from "./cache";
import Pages from "./pages";

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache({});
const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});
const typeDefs = gql`
  extend type query {
    isLoggedIn: Boolean!
  }
`;

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  connectToDevTools: true,
});
client.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});
client.onResetStore(() => {
  client.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      isLoggedIn: !!localStorage.getItem("token"),
    },
  });
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

export default App;
