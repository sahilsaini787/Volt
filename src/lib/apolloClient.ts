import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_API_URL, //GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
