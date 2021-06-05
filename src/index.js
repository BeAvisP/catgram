import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import {App} from './App';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://petgram-server-lilac.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('app'));
