import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Siderba";
import Home from "./pages/home/Home.jsx";
import UserList from "./pages/users/UserList.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditUser from "./pages/edituser/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route path="/users/:userId">
              <EditUser />
            </Route>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
