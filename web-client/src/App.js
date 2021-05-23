import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

const uri = process.env.API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GlobalStyle />
        <Pages />
      </div>
    </ApolloProvider>
  );
};

export default App;
