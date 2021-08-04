import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Siderba";
import Home from "./pages/home/Home.jsx";
import UserList from "./pages/users/UserList.jsx";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

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
            <Route path="/users">
              <UserList />
            </Route>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
