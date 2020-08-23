import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core';
import { AnimatePresence } from 'framer-motion';
import './config/axios';

import { customTheme } from './theme';
import { DemoContext } from './context/demo';

import {
  CatList, Cat, NewCat, PageCounter, contextValue,
}
//  from './pages-workshop-hooks';
//  from './pages-workshop-ui';
//  from './pages-demo';
  from './pages-demo-react-query';

function App() {
  return (
    <DemoContext.Provider value={contextValue}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Box p="8" maxW="6xl" m="auto">
          <Router>
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={CatList} />
                    <Route path="/cat/new" exact component={NewCat} />
                    <Route path="/cat/:catId" exact component={Cat} />
                    <Route path="/counter" exact component={PageCounter} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </Router>
        </Box>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </DemoContext.Provider>
  );
}

export default App;
