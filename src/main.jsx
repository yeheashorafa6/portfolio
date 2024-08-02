import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import About from './About.jsx'
import Project from './Project.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element:<About />,
  },
  {
    path: "Project",
    element:<Project />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
