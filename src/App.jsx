import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Friends from "./Friends/Friends";
import Home from "./Home/Home";
import Main from "./Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/friend",
        element: <Friends />,
        loader: async ()=> {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        404 Not Found
      </h1>
    ),
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
