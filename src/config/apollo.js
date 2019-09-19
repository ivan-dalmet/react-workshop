import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://api.thecatapi.com/v1/',
  headers: {'x-api-key': process.env.API_KEY},
});

// setup your client
export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});