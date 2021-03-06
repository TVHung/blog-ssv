import "./App.css";
import Signin from "./components/blog/pages/Signin";
import Signup from "./components/blog/pages/Signup";
import Home from "./components/blog/pages/Home";
import About from "./components/blog/pages/About";
import Error from "./components/blog/pages/Error";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import Review from "./components/blog/pages/Review";
import Navbar from "./components/blog/components/Navbar";
import Footer from "./components/blog/components/Footer";
import PostDetail from "./components/blog/pages/PostDetail";

toast.configure();

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Signin} />
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/review" component={Review} />
                    <Route exact path="/about" component={About} />
                    <Route path="/detail/:id" component={PostDetail} />
                    <Route path="/:someString" component={Error} />
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    );
}

export default App;
