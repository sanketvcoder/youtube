import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Componenets/Header'
import Feed from './Componenets/Feed'
import SearchResult from './Componenets/SearchResult'
import VideoDetails from './Componenets/VideoDetails'

import {AppContext} from "./context/ContextApi";

function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col">
            <Header/>
            <Routes>
              <Route path = "/" exact element = {<Feed/>}/>
              <Route path = "/searchResult/:searchQuery" element = {<SearchResult/>}/>
              <Route path = "/video/:id" element = {<VideoDetails/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
