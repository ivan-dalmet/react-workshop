import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { ApolloProvider } from '@apollo/react-hooks';

import './config/axios';
import { client } from './config/apollo';
import { DemoContext } from './context/demo';

import { CatList, Cat, PageCounter, contextValue }
  // from './pages-demo';
  // from './pages-demo-apollo';
  from './pages-workshop';

function App() {
  return (
    <DemoContext.Provider value={contextValue}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <CSSReset />
          <Box p="8" maxW="6xl" m="auto">
            <Router>
              <Route path="/" exact component={CatList} />
              <Route path="/cat/:catId" exact component={Cat} />
              <Route path="/counter" exact component={PageCounter} />
            </Router>
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </DemoContext.Provider>
  );
}

export default App;
