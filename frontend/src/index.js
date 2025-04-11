// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './styles.css'; // Optional: Import global styles
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // // Create a root for React 18+
// // const root = ReactDOM.createRoot(document.getElementById('root'));

// // // Render the app
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (e.g., console.log) or send to an analytics endpoint.
// // // Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();





import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// Basic CSS reset
const style = document.createElement("style")
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`
document.head.appendChild(style)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
