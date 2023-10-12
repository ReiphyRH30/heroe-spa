import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from "./store/store.js";
import App from "./App.jsx";
import { PokemonApp } from "./PokemonApp.jsx";
import "./index.css";
import { TodoApp } from "./TodoApp.jsx";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* <App /> */}
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
      
  </React.StrictMode>
)