import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppContext } from './context/ContextApi';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // 

root.render(

    <AppContext>
      <App />
    </AppContext>

);
