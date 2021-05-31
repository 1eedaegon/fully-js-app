import { InMemoryCache, makeVar } from "@apollo/client";

// Reactive variable
export const isLoggedInVar = makeVar(!!localStorage.getItem("token"));
// Set cache using reactive variable
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});
