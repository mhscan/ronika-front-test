import "./styles/global.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import { ToastContainer } from "react-toastify";

function App() {
  const route = useRoutes(routes);

  return (
    <section className='section'>
      {route} <ToastContainer autoClose={8000} />
    </section>
  );
}

export default App;
