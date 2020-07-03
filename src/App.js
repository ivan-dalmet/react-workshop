import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools' // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

import './config/axios';
import { customTheme } from './theme';
import { DemoContext } from './context/demo';

import { CatList, Cat, PageCounter, contextValue }
  // from './pages-workshop-hooks';
  // from './pages-workshop-ui';
  // from './pages-demo';
  from './pages-demo-react-query';

function App() {
  return (
    <DemoContext.Provider value={contextValue}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Box p="8" maxW="6xl" m="auto">
          <Router>
            <Route path="/" exact component={CatList} />
            <Route path="/cat/:catId" exact component={Cat} />
            <Route path="/counter" exact component={PageCounter} />
          </Router>
        </Box>
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </DemoContext.Provider>
  );
}

export default App;
