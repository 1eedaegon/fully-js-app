import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import GlobalStyle from "./Components/GlobalStyle";
import { typeDefs, IS_LOGGED_IN } from "./gql/query";
import Pages from "./Pages";

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
