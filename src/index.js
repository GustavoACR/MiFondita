import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { OcsakApi } from "./api/OcsakApi";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ApiProvider api={OcsakApi}>
        <App />
      </ApiProvider>
    </HashRouter>
  </React.StrictMode>
);
