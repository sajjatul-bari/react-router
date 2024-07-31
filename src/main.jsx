import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Users from "./Component/Users/Users.jsx";
import Posts from "./Component/Posts/Posts.jsx";
import UserDetails from "./Component/UserDetais/UserDetails.jsx";
import PostDetails from "./Component/PostDetails/PostDetails.jsx";
import Comments from "./Component/Header/Comments/Comments.jsx";
import CommentDetails from "./Component/CommnentDetails/CommentDetails.jsx";
import Error from "./Component/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/post/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/comments",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Comments></Comments>,
      },
      {
        path: "/comments/:userId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.userId}`
          ),
        element: <CommentDetails></CommentDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
