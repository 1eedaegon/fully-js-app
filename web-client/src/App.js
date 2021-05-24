import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
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
