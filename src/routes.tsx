import Landing from "./page/landing";

const routes = [
  { path: "/", element: <Landing></Landing> },

  { path: "/*", element: <p> 404 </p> },
];

export default routes;
