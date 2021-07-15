import "./App.css";
import Login from "./components/admin/Login";
import Signin from "./components/blog/pages/Signin";
import Signup from "./components/blog/pages/Signup";
import Home from "./components/blog/pages/Home";
import About from "./components/blog/pages/About";
import Error from "./components/blog/pages/Error";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Fragment } from "react";
toast.configure();
function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Signin} />
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/about" component={Signin} />
                    <Route exact path="/admin/login" component={Login} />
                    <Route path="/:someString" component={Error} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
