import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { useApolloClient } from '@/hooks/use-apollo-client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const { client } = useApolloClient();
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
