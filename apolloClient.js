import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://shoplly-api.techawks.io/graphql",
  cache: new InMemoryCache(),
});

export default client;