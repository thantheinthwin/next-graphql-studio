// apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const apiKey = process.env.NEXT_PUBLIC_GRAPHQL_API_KEY; // Replace with your actual API key

  // Return the headers to the context so httpLink can read them
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
});

export default client;
