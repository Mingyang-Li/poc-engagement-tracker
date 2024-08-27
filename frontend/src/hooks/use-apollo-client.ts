import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '../env';

const client = new ApolloClient({
  uri: env.VITE_API_URL,
  cache: new InMemoryCache(),
});

export const useApolloClient = () => {
  return { client };
};
