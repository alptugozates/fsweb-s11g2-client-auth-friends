import "./App.css";
import LoginForm from "./components/LoginForm";
import { Link, Switch, Route } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState(false);

  const handleClear = () => {
    localStorage.removeItem("s11g2");
  };
  return (
    <div className="App">
      <div className=" bg-slate-100 w-100 p-6 rounded mt-20 first-letter:2px  ">
        <div className=" flex items-center justify-center mb-20 gap-10 font-bold border-b-2 pb-3 border-b-black">
          <h1 className=" font-extrabold">FRIENDS DATABASE</h1>
          <nav className="flex gap-3">
            {!check && (
              <Link className="custom-link" to="/">
                LOGIN
              </Link>
            )}
            <Link className="custom-link" to="/friends">
              FRIEND LIST
            </Link>
            <Link className="custom-link" to="/friends-add">
              ADD FRIEND
            </Link>
            {check && (
              <Link
                className="custom-link"
                onClick={() => {
                  setCheck(false);
                  handleClear();
                }}
                to="/"
              >
                LOGOUT
              </Link>
            )}
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <LoginForm setCheck={setCheck} />
            </Route>
            <PrivateRoute>
              <Route path="/friends" component={FriendsList} />
              <Route path="/friends-add" component={AddFriend} />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
