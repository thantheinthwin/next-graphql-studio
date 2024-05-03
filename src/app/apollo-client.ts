// apollo-client.ts
import typeDefs from "@/graphql/schema.graphql";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const apiKey = process.env.NEXT_PUBLIC_GRAPHQL_API_KEY;
  return {
    headers: {
      ...headers,
      "X-Api-Key": apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  typeDefs,
});

export default client;
