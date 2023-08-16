import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Error } from './components/Error';
import {Products} from './components/Products';
import {Pricing} from './components/Pricing';
import {Blog} from './components/Blog';
import {Orders} from './components/Orders';
import { Logout } from './components/Logout';
import { Login } from './components/Login';
import React from 'react';
import ResponsiveAppBar from './components/AppBar';

const App = () => {
  return (
    <React.Fragment>
      
      <ResponsiveAppBar/>
      
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/products" element = {<Products/>}></Route>
        <Route path="/pricing" element = {<Pricing/>}></Route>
        <Route path="/blog" element = {<Blog/>}></Route>
        <Route path="/profile" element = {<Profile/>}></Route>
        <Route path="/orders" element = {<Orders/>}></Route>
        <Route path="/logout" element = {<Logout/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
        
    </React.Fragment>
  );
}

export default App;
