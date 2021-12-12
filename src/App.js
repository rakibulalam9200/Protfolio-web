import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Blogs from "./pages/Blogs/Blogs";
import Home from './pages/Home/Home/Home';
import NotFound from "./pages/NotFound/NotFound";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
     <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/project/:name">
              <ProjectDetails></ProjectDetails>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route> 
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
