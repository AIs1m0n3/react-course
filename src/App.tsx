import "./App.scss";
import { AppRoutes } from "./routes";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import { Header } from "./modules/layout/header";
import { Homepage } from "./modules/pages/homepage/homepage";
import { Users } from "./modules/pages/users/users";
import { NewUser } from "./modules/pages/users/new-user/new-user";
import { NotFound } from "./modules/pages/not-found/not-found";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Homepage />,
  //   },
  //   {
  //     path: "/users",
  //     children: [
  //       {
  //         index: true,
  //         element: <Users />,
  //       },
  //       {
  //         path: "new",
  //         element: <NewUser />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-content">
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
