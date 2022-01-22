import React from "react";
import Router from "./router/Router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <Router />
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
