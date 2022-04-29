import React, { useState, useEffect } from 'react';
import Details from './components/gif-details/Details';
import { BrowserRouter, Link, useRoutes, Routes, Route, useParams } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <Home />
      </div>
        
    </div>
  );
}

export default App;
