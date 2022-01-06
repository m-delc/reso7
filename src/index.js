import App from "./App";
import './index.css'
import { BrowserRouter, 
  Routes, 
  Route } 
  from "react-router-dom";
import { render } from "react-dom";
import CssBaseline from 
  '@material-ui/core/CssBaseline'



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <CssBaseline />
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>  
  </BrowserRouter>,
  rootElement
);