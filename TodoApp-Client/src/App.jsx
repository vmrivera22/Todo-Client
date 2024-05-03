import { createBrowserRouter } from "react-router-dom";
import Template from "./routes/Template";
import Home from "./routes/Home";
import NewTodo from "./routes/NewTodo";
import TodoPage from "./routes/TodoPage";
import EditTodo from "./routes/EditTodo";
import Help from "./routes/Help";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newtodo",
        element: <NewTodo />,
      },
      {
        path: "/todo/:id",
        element: <TodoPage />,
      },
      {
        path: "/edit/:id",
        element: <EditTodo />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

export default App;
