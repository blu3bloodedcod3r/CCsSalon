import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Datepicker, Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import { StoreProvider } from "./utils/GlobalContext"

import Header from './components/header'
import Home from './pages/home';
import User from './pages/user';
import Admin from './pages/admin';
import Login from './pages/login';
import Signup from './pages/signup';
import Book from './pages/book';
import Services from './pages/modifyServices';
import Nav from './components/Nav/index';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
          <div className="flex-container">
            <StoreProvider>
              <Nav />
              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/signup" 
                  element={<Signup />} 
                />
                <Route 
                  path="/appointment" 
                  element={<Book /> } 
                />
                <Route 
                  path="/services" 
                  element={<Services />} 
                />
                <Route
                  path="/user" 
                  element={<User />} 
                />
                <Route 
                  path="/admin" 
                  element={<Admin />} 
                />
                {/* <Route
                  path="*" 
                  element={<NoMatch />} 
                /> */}
              </Routes>
            </StoreProvider>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;