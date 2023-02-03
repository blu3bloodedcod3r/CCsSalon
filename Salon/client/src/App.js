import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from "./utils/GlobalContext"

// import AppointmentPicker from 'appointment-picker';
import Home from './pages/home'
import Header from './components/header'
import Services from './pages/servicespage';
import User from './pages/user';
import Admin from './pages/admin';
import Login from './pages/login';
import Signup from './pages/signup';
import Book from './pages/book';
import Modservices from './pages/modifyServices';
import Nav from './components/Nav/index';
import Nomatch from './pages/nomatch'
// import { StoreProvider } from './utils/GlobalState';


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
                  element={<Book />} 
                />
                <Route 
                  path="/modservices" 
                  element={<Modservices />} 
                />
                <Route
                  path="/user" 
                  element={<User />} 
                />
                <Route
                  path="/services" 
                  element={<Services/>} 
                />
                <Route 
                  path="/admin" 
                  element={<Admin />} 
                />
                <Route
                  path="*" 
                  element={<Nomatch />} 
                />
              </Routes>
            </StoreProvider>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

